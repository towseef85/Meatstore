import { useState } from "react"
import { IWidgetItems } from "../models/Widgets/WidgetItems"
import { useStore } from "../store/store"
import { Button, Checkbox, Divider, Form, Header, Segment, Dropdown } from 'semantic-ui-react'
import { v4 as uuid } from 'uuid';
import { OfferValidation } from '../Validations/OfferValidation';
import MyTextInput from '../components/controls/MyTextInput';
import MyDateInput from '../components/controls/MyDateInput';
import { useEffect } from 'react';
import { WidgetItemValidation } from "../Validations/WidgetItemValidation";
import { Formik } from "formik";
import { observer } from "mobx-react-lite";

interface Props{
    headingId: string
}

export default observer( function AddWidgetItem({headingId}: Props) {
    const {categoryStore:{loadCategories, categories, CategoryRegistry},
    productStore:{loadProducts, products, ProductRegistry}, 
    widgetItemStore:{createItem}} = useStore()

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

   const [WItem, setWItem] = useState<IWidgetItems>({
    id: "",
    title: "",
    redirectTo: "",
    redirectToId: "",
    imageFile: null,
    widgetId: "",
    isVisible: false
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

   const handleSubmit = (item: IWidgetItems) =>{
       const formData = new FormData()
       formData.append("id", uuid())
       formData.append("title", item.title)
       formData.append("redirectTo", redirectValue!)
       formData.append("redirectToId", redirectOptionValue!)
       formData.append("isVisible", String(isVisible))
       formData.append("widgetId",headingId)
       if(fileSelected) formData.append("imageFile", fileSelected)
         createItem(formData)
       // console.log([Object.fromEntries(formData)])
   }
    return (
        <Segment clearing>
        <Header as="h1" content="Add Item" sub color='teal' />
        <Divider/>
        <Formik validationSchema={WidgetItemValidation}  initialValues={WItem} onSubmit={handleSubmit}>
             {({handleSubmit, isValid, isSubmitting, dirty})=> (
                 <Form className="ui form"  onSubmit={handleSubmit} autoComplete="off">
                       <Form.Group widths="equal">
                         <MyTextInput name="title" label="Title" placeholder="Enter Title" />
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
