import { observer } from 'mobx-react-lite'
import { useState, useEffect } from 'react'
import MySelectInput from './controls/MySelectInput'

interface Props{
   selectValues: any[],
   placeHolder:string,
   label:string,
   name: string,
}

function SelectControl({selectValues, placeHolder, label, name}: Props) {
    const [values, setValues] = useState([{
        key:'',
        value:'',
        text: ''
    }])

   useEffect(() => {
    settingvalues()
   }, [selectValues])

   const settingvalues = () =>{

       setValues(selectValues.map(value => ({key:value.id, text: value.title, value: value.id})))
   }

    return (
        <MySelectInput placeholder={placeHolder} label={label} name={name} options={values}/>
    )
}

export default observer(SelectControl)
