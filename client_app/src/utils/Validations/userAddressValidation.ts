import * as Yup from 'yup'



export const UserAddressValidation = Yup.object({
    address: Yup.string().required("Please enter Address"),
    landmark: Yup.string().required("Please enter landmark"),
    city: Yup.string().required("Please enter City"),
 })