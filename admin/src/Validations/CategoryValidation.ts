import * as Yup from 'yup'

 export const CategoryValidation = Yup.object({
    title: Yup.string().required('Category Name is required'),
    arabicTitle: Yup.string().required('Category Arabic Name is required')
 })