import * as Yup from 'yup'



 export const SliderValidation = Yup.object({
    position: Yup.number().required('Please Enter position')
 })