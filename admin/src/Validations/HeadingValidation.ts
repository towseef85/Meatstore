import * as Yup from 'yup'



 export const HeadingValidation = Yup.object({
    title: Yup.string().required('Please Enter Heading'),
    arabicTitle: Yup.string().required('Please Enter Heading in arabic'),
 })