import { Formik } from 'formik'
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { Button, Checkbox, Divider, Form, Header, Segment, Dropdown, DropdownProps } from 'semantic-ui-react'
import { v4 as uuid } from 'uuid';

import MySelectInput from '../components/controls/MySelectInput'
import MyTextInput from '../components/controls/MyTextInput'
import SelectControl from '../components/selectControl'
import { ISlider } from '../models/Slider'
import { useStore } from '../store/store'
import { SliderValidation } from '../Validations/SliderValidation'

export default observer(function AddSlider() {
    const {categoryStore:{loadCategories, categories},
     productStore:{loadProducts, products}, 
     sliderStore:{createSlider}} = useStore()
   
    const [fileSelected, setFileSelected] = useState<File>()
    const [redirectValue, setRedirectValue] = useState()
    const [redirectOptionValue, setRedirectOptionValue] = useState()
    const [visible, setVisible] = useState(false)
    const [redirectOptions, setRedirectOptions] = useState<any[]>([{
        key:"",
        text:"",
        value:""
    }])


    const selectOptions =[
        { key: 1, text: 'Select Options', value: '' },
        { key: 2, text: 'Category', value: 'Category' },
        { key: 3, text: 'Product', value: 'Product' },
    ]

    const [slider, setSlider] = useState<ISlider>({
        id: "",
        position: 0,
        redirectTo:'',
        imageName: "",
        imageSrc: "",
        imageFile: null,
        isVisible:false,
        redirectToId:''
    })

    const [isVisible, setIsVisible] = useState(false)
    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
    
        if (!fileList) return;
    
        setFileSelected(fileList[0]);
    };
    const handleChange =(e: any, {value}: any) =>{
        e.preventDefault();
        setRedirectOptions([{}])
        setRedirectValue(value)
        setVisible(false)
        if(value == "Category")
        {
            
            setRedirectOptions(categories.map(value => ({key:value.id, text: value.title, value: value.id})))
            setVisible(true)
            
        }
        if(value =="Product"){
           
            setRedirectOptions(products.map(value => ({key:value.id, text: value.title, value: value.id})))
            setVisible(true)
        
        }
    }
    const handleRedirectChange=(e:any, {value}: any) =>{
        e.preventDefault();
        setRedirectOptionValue(value)
    }

    const handleSubmit = (slider: ISlider) =>{
        const formData = new FormData()
        formData.append("id", uuid())
        formData.append("position", String(slider.position))
        formData.append("redirectTo", redirectValue!)
        formData.append("redirectToId", redirectOptionValue!)
        formData.append("isVisible", String(isVisible))
        if(fileSelected) formData.append("imageFile", fileSelected)
            createSlider(formData)
        // console.log([Object.fromEntries(formData)])
    }
    return (
        <Segment clearing>
           <Header as="h1" content="Add Slider" sub color='teal' />
           <Divider/>
           <Formik validationSchema={SliderValidation}  initialValues={slider} onSubmit={handleSubmit}>
                {({handleSubmit, isValid, isSubmitting, dirty})=> (
                    <Form className="ui form"  onSubmit={handleSubmit} autoComplete="off">
                          <Form.Group widths="equal">
                            <MyTextInput name="position" label="Position" placeholder="Enter Position" />
                            <Form.Field>
                            <label>Select where to redirect the user</label>
                            <Dropdown  labeled  name="redirectTo" onChange={handleChange} value={redirectValue} options={selectOptions} selection  placeholder="Redirect To"/>
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths='equal'>
                           
                           {visible && 
                           <Form.Field>
                               <label>{`Please Select ${redirectValue}`}</label>
                           <Dropdown selectOnNavigation selection labeled name="redirectToId" value={redirectOptionValue} onChange={handleRedirectChange} options={redirectOptions} placeholder={`please select ${redirectValue}`}/>
                           </Form.Field>
                           }
                        </Form.Group>
                        <Form.Group widths="equal">
                        <MyTextInput name="File" label="Upload Image" placeholder="Please select jpg or png file" type="file" onChange={handleImageChange}/>
                        <Segment compact>
                        <Checkbox label="Status" fitted toggle name="isVisible" checked={isVisible} value={String(isVisible)} onChange={() => setIsVisible(!isVisible)}/>
                        
                        </Segment>
                        </Form.Group>
                        <Button type="submit" primary icon='add' content="Submit" />
                    </Form>
                )}
                </Formik>
           </Segment>
    )
})
