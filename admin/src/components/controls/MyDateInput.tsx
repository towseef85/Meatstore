import { useField } from 'formik'
import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import DatePicker, {ReactDatePickerProps} from 'react-datepicker'

interface Props{
    width?:any ;
}

export default function MyDateInput(props: Partial<ReactDatePickerProps>, {width}: Props) {
    const[field, meta, helpers]= useField(props.name!)
    return (
        <Form.Field error={meta.touched && !!meta.error} width={props.width || " "}>
            <label>{props.label}</label>
            <DatePicker 
            {...field}
            {...props}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            
            placeholderText={props.placeholderText}
            selected={(field.value && new Date(field.value)) || null}
            onChange={value=> helpers.setValue(value)}
            />
            {props.children}
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label> 
            ): null}
        </Form.Field>
    )
}
