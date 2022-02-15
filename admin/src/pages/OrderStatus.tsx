import { Formik } from "formik"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import { Button, Divider, Dropdown, Form, Header, Segment } from "semantic-ui-react"
import { OrderStatusUpdate } from "../models/Order"
import { useStore } from "../store/store"

interface Props{
    orderId: string
}

export default observer(function OrderStatus({orderId}: Props) {
    const {orderStore:{updateStatus}} = useStore()
    const selectOptions =[
        { key: 1, text: 'Select Options', value: '' },
        { key: 2, text: 'Approved', value: 'Approved' },
        { key: 3, text: 'Out for Delivery', value: 'Out for Delivery' },
        { key: 4, text: 'Deleverd', value: 'Deliverd' },
        { key: 5, text: 'Rejected', value: 'Rejected' }
    ]

    const [statusValue, setStatusValue] = useState("")
    const [statusInitial, setStatusInitial] = useState<OrderStatusUpdate>({
        id: "",
        status:""
    })
    const handleChange =(e:any, {value}: any) =>{
        setStatusValue(value)
    }
    const handleSubmit =(status: OrderStatusUpdate) =>{
        status.id= orderId
        status.status=statusValue
       updateStatus(status)
    }
    return (
        <Segment clearing>
        <Header as="h1" content="Update order status" sub color='teal' />
        <Divider/>
        <Formik   initialValues={statusInitial} onSubmit={handleSubmit}>
             {({handleSubmit, isValid, isSubmitting, dirty})=> (
                 <Form className="ui form"  onSubmit={handleSubmit} autoComplete="off">
                       <Form.Group widths="equal">
                        
                        <Form.Field>
                        <label>Select where to redirect the user</label>
                        <Dropdown  labeled  name="status" options={selectOptions} onChange={handleChange} selection  placeholder="Status"/>
                        </Form.Field>
                    </Form.Group>
                    <Button type="submit" primary icon='add' content="Submit" />
                 </Form>
                 )}
                 </Formik>
        </Segment>
    )
})
