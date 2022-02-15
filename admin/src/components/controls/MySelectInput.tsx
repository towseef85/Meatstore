import { useField } from 'formik'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Form, Label, Select } from 'semantic-ui-react'

interface Props{
    placeholder:string;
    name: string;
    options: any;
    label?: string;
    width?:any;
}

function MySelectInput(props: Props) {
    const[field, meta, helpers]= useField(props.name)
    return (
        <Form.Field error={meta.touched && !!meta.error} width={props.width || 'sixteen'}>
            <label>{props.label}</label>
            <Select clearable options={props.options}   value={field.value || null} onChange={(e,d) => 
            helpers.setValue(d.value)} 
            onBlur={()=> helpers.setTouched(true)}
            placeholder={props.placeholder}/>
                
           
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label> 
            ): null}
        </Form.Field>
    )
}

export default observer(MySelectInput)
