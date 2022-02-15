import * as Yup from 'yup'

export const ImageValidation = Yup.object().shape({
    File: Yup.mixed().test('fileSize', 'File too large',  value => value.size <= 200000)
    .test("type","Only jpeg, jpg or png images are allowed to upload",(value) =>{
        return value && (
            value[0].type === "image/jpeg" ||
            value[0].type === "image/png" 
        )
    })
})