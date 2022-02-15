import * as Yup from 'yup'



export const ProductValidation = Yup.object({
        title: Yup.string().required('Product Name is required'),
        arabicTitle: Yup.string().required('Arabic Name is required'),
        description: Yup.string().required('Description is required'),
        descriptionArabic: Yup.string().required('Description is required'),
        minQuantity: Yup.string().required('Description is required'),
        unitId: Yup.string().required('Please select Unit'),
        price: Yup.number().required('Please enter price'),
        categoryId: Yup.string().required('Please select category'),
        
})