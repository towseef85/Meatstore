import { useStore } from "../store/store"
import {useState, useEffect} from 'react'
import { Formik } from "formik";
import { Button, Segment, Form, Header, Divider, Checkbox } from "semantic-ui-react";
import { IProduct } from "../models/Product";
import { ProductValidation } from "../Validations/ProductValidations";
import SelectControl from "../components/selectControl";
import { observer } from "mobx-react-lite";
import MyTextInput from "../components/controls/MyTextInput";
import MyTextArea from "../components/controls/MyTextArea";
import { ICategory } from "../models/Category";
import { v4 as uuid } from 'uuid';


export default observer(function AddProduct() {
    const {unitStore, categoryStore, productStore} = useStore()
    const {Units, loadUnits, unitRegistry} = unitStore
    const {categories, loadCategories, CategoryRegistry} = categoryStore
    const {createProduct} = productStore

    useEffect(() => {
        if(unitRegistry.size < 1 || CategoryRegistry.size <1)
        {
            loadUnits()
            loadCategories()
        }
      
    }, [loadUnits, loadCategories, unitRegistry.size, CategoryRegistry.size])

    const [showInNav, setShowInNav] = useState(false)

const [product, setProduct] = useState<IProduct>({
    id: "",
    title: "",
    subTitle: "",
    arabicSubTitle: "",
    arabicTitle: "",
    description: "",
    descriptionArabic: "",
    minQuantity: "",
    unitId: "",
    price: 0,
    categoryId: "",
    showAsBestSeller:showInNav
})

const handleSubmit = (product : IProduct) =>{
    let newProduct = {...product, id: uuid(), showAsBestSeller: showInNav}
    createProduct(newProduct)  
    console.log("New Product", newProduct); 
}


    return (
       <Segment clearing>
           <Header as="h1" content="Add Product" sub color='teal' />
           <Divider/>
           <Formik validationSchema={ProductValidation} initialValues={product} onSubmit={handleSubmit}>
                {({handleSubmit, isValid, isSubmitting, dirty})=> (
                    <Form className="ui form"  onSubmit={handleSubmit} autoComplete="off">
                        <Form.Group widths="equal">
                            <MyTextInput name="title" label="Product Name" placeholder="Enter Product Name" />
                            <MyTextInput name="arabicTitle" label="Product Name in arabic" placeholder="Enter Product Name in arabic" />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <MyTextInput name="subTitle" label="Product Sub Title" placeholder="Enter Product Sub title" />
                            <MyTextInput name="arabicSubTitle" label="Product Sub Title in arabic" placeholder="Enter Product sub title in arabic" />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <MyTextInput name="minQuantity" label="Minimum Quantity" placeholder="Please enter minimum quantity" />
                            <MyTextInput name="price" label="Product Price" placeholder="Product Price" />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <SelectControl label="Units" placeHolder="Select Unit" name="unitId" selectValues={Units}/>
                           
                        <SelectControl label="Category" placeHolder="Select Category" name="categoryId" selectValues={categories}/>
                        </Form.Group>
                        <Segment compact>
                        <Checkbox label="Show As Best Seller Product" fitted toggle name="showAsBestSeller" checked={showInNav} value={String(showInNav)} onChange={() => setShowInNav(!showInNav)}/>
                        </Segment>
                        <Form.Group widths="equal">
                        <MyTextArea name="description" placeholder='Product Description' rows={3} />
                        <MyTextArea name="descriptionArabic" placeholder='Product Description in arabic' rows={3} />
                        </Form.Group>
                        <Button loading={isSubmitting} disabled={isSubmitting || !isValid || !dirty} type="submit" primary icon='add' content="Submit" />
                    </Form>
                )}
           </Formik>
       </Segment>
    )
})


