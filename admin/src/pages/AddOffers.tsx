import React, { useState } from 'react'
import { Formik } from 'formik'
import { observer } from 'mobx-react-lite';
import { IWOffers } from '../models/Widgets/WOffers'
import { useStore } from '../store/store'
import { Button, Checkbox, Divider, Form, Header, Segment, Dropdown } from 'semantic-ui-react'
import { v4 as uuid } from 'uuid';
import { OfferValidation } from '../Validations/OfferValidation';
import MyTextInput from '../components/controls/MyTextInput';
import MyDateInput from '../components/controls/MyDateInput';
import { useEffect } from 'react';

export default observer(function AddOffers() {
    const {categoryStore:{loadCategories, categories, CategoryRegistry},
    productStore:{loadProducts, products, ProductRegistry}, 
    offerStore:{createOffers}} = useStore()

    useEffect(() => {
        if(CategoryRegistry.size <1 || ProductRegistry.size <1)
        {
            loadCategories()
            loadProducts()
        } 
    }, [CategoryRegistry.size, ProductRegistry.size, loadProducts, loadCategories])

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

    const positionValue =[
        {key:1, text:"Top", value:"Top"},
        {key:2, text:"Middle", value:"Middle"},
        {key:3, text:"Bottom", value:"Bottom"}
    ]

    const [offerInitial, setofferInitial] = useState<IWOffers>({
        id: "",
        startDate: new Date() ,
        endDate: new Date(),
        imageName: "",
        imageSrc: "",
        redirectTo: "",
        isVisible: false,
        redirectToId: "",
        ImageFile:null,
        position: ""
    })

    const [isVisible, setIsVisible] = useState(false)
    const [position, setPosition] = useState("")
    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
    
        if (!fileList) return;
    
        setFileSelected(fileList[0]);
    };
    const handlePositionChange =(e: any, {value}: any)=>{
        e.preventDefault();
        setPosition(value)
    }
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

    const handleSubmit = (offer: IWOffers) =>{
        const formData = new FormData()
        formData.append("id", uuid())
        formData.append("startDate", offer.startDate.toDateString())
        formData.append("endDate", offer.endDate.toDateString())
        formData.append("redirectTo", redirectValue!)
        formData.append("redirectToId", redirectOptionValue!)
        formData.append("isVisible", String(isVisible))
        formData.append("position", position)
        if(fileSelected) formData.append("imageFile", fileSelected)
        //createOffers(formData)
        console.log([Object.fromEntries(formData)])
    }
    return (
        <Segment clearing>
        <Header as="h1" content="Add Slider" sub color='teal' />
        <Divider/>
        <Formik validationSchema={OfferValidation}  initialValues={offerInitial} onSubmit={handleSubmit}>
             {({handleSubmit, isValid, isSubmitting, dirty})=> (
                 <Form className="ui form"  onSubmit={handleSubmit} autoComplete="off">
                       <Form.Group widths="equal">
                        
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
                     <MyDateInput
                      placeholderText="Start Date"
                      name="startDate"
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy"
                      width={12}
                      label="Start Date"
                    />
                     <MyDateInput
                      placeholderText="Start Date"
                      name="endDate"
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy"
                      width={12}
                      label="End Date"
                    />
                     <Form.Field>
                         <label>Select Position</label>
                         <Dropdown  labeled  name="position"  options={positionValue} onChange={handlePositionChange} value={position} selection  placeholder="Position"/>
                         </Form.Field>
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
