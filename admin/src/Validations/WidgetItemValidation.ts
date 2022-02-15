import * as Yup from 'yup'


 export const WidgetItemValidation = Yup.object({
   // id: Yup.string().required('Category Name is required'),
    title: Yup.string().required('Category Arabic Name is required')
 })