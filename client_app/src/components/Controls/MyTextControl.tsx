import { useField, ErrorMessage } from "formik"

interface Props{
    placeholder:string;
    name: string;
    label?: string;
    width?:any ;
    type?:any;
    onChange?: any;
    class?:string
}

export default function MyTextControl(props: Props) {
    const [field, meta] = useField(props)
    return (
        <>
         <input type="text" 
         className={`${props.class} ${meta.touched && meta.error && 'is-invalid'}`}  {...field} {...props}
         autoComplete='off'
         />   
         <ErrorMessage component='div' className='text-danger' name={field.name} />
        </>
    )
}
