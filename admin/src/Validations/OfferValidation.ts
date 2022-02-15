import * as Yup from 'yup'



 export const OfferValidation = Yup.object({
    startDate: Yup.date().required('Please Enter Heading'),
    endDate: Yup.date().required('Please Enter Heading in arabic'),
 })