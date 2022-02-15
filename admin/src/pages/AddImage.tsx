import { Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Icon, Segment } from 'semantic-ui-react';
import MyTextInput from '../components/controls/MyTextInput';
import { Iimage } from '../models/Image';
import { useStore } from '../store/store';
import { ImageValidation } from '../Validations/ImageValidation';

interface Props{
    productId: string
}

export default observer( function AddImage({productId}:Props) {
    const {productStore:{uploadPhoto, imageLoading}} = useStore()
    const [file, setFile] = useState<Iimage>({
        File:null,
        ProductId:productId
    })
    const [fileSelected, setFileSelected] = useState<File>()

    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
      const fileList = e.target.files;
  
      if (!fileList) return;
  
      setFileSelected(fileList[0]);
  };
  const handleSubmit =(image: Iimage)=>{
    const formData = new FormData();
    formData.append("ProductId", image.ProductId)
    if(fileSelected) formData.append("File", fileSelected)
    uploadPhoto(formData)
   // console.log([Object.fromEntries(formData)])
  }
    return (
        <Segment placeholder>
            <Header as="h2" icon>
                <Icon name='file image' size='small'/>
                Please upload Product Image.
            </Header>
            <Segment.Inline>
            <Formik
       
        initialValues={file}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
            <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                <MyTextInput name="File" label="Upload Image" placeholder="Please select jpg or png file" type="file" onChange={handleImageChange}/>
                <Button positive type="submit" loading={imageLoading}>
                    <Icon name="upload"/>
                    Upload
                </Button>
                </Form>
        )}
        </Formik>
            </Segment.Inline>
        </Segment>
    )
})