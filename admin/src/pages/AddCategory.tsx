import React from 'react'
import { useStore } from "../store/store"
import {useState, useEffect} from 'react'
import { Formik } from "formik";
import { Button, Segment, Form, Header, Divider, Checkbox } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import MyTextInput from "../components/controls/MyTextInput";
import MyTextArea from "../components/controls/MyTextArea";
import { v4 as uuid } from 'uuid';
import { ICategory } from '../models/Category';
import { string } from 'yup/lib/locale';
import { CategoryValidation } from '../Validations/CategoryValidation';

export default observer(function AddCategory() {
    const{categoryStore:{createCategory}} = useStore()

    const [category, setCategory] = useState<ICategory>({
        id: "",
        title: "",
        arabicTitle: "",
        imageName: "",
        imageSrc: "",
        imageFile: null,
        showInNav:false
    })
    const [showInNav, setShowInNav] = useState(false)
    const [fileSelected, setFileSelected] = useState<File>()
    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
    
        if (!fileList) return;
    
        setFileSelected(fileList[0]);
    };

    const handleSubmit =(category:ICategory) =>{
        const formData = new FormData();
        formData.append("Id", uuid())
        formData.append("title", category.title)
        formData.append("arabicTitle", category.arabicTitle)
        if(fileSelected) formData.append("imageFile", fileSelected)
        formData.append("ShowInNav", String(showInNav))
        createCategory(formData)
        console.log([Object.fromEntries(formData)])
    }

    return (
         <Segment clearing>
           <Header as="h1" content="Add Product" sub color='teal' />
           <Divider/>
           <Formik validationSchema={CategoryValidation} initialValues={category} onSubmit={handleSubmit}>
                {({handleSubmit, isValid, isSubmitting, dirty})=> (
                    <Form className="ui form"  onSubmit={handleSubmit} autoComplete="off">
                          <Form.Group widths="equal">
                            <MyTextInput name="title" label="Category Name" placeholder="Enter Category Name" />
                            <MyTextInput name="arabicTitle" label="Category Name in arabic" placeholder="Enter Category Name in arabic" />
                        </Form.Group>
                        <Form.Group widths="equal">
                        <MyTextInput name="File" label="Upload Image" placeholder="Please select jpg or png file" type="file" onChange={handleImageChange}/>
                        <Segment compact>
                        <Checkbox label="Show in Navbar" fitted toggle name="showInNav" checked={showInNav} value={String(showInNav)} onChange={() => setShowInNav(!showInNav)}/>
                        </Segment>
                        </Form.Group>
                        <Button loading={isSubmitting} type="submit" primary icon='add' content="Submit" />
                    </Form>
                )}
                </Formik>
           </Segment>
    )
})
