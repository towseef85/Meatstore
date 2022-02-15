import { useStore } from "../store/store"
import {useState, useEffect} from 'react'
import { Formik } from "formik";
import { Button, Segment, Form, Header, Divider, Checkbox } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import MyTextInput from "../components/controls/MyTextInput";
import { HeadingValidation } from "../Validations/HeadingValidation";
import { IHeading } from "../models/Widgets/Headings";
import { v4 as uuid } from 'uuid';

export default observer(function AddHeading() {
    const {headingStore:{createWidgetHeading}} = useStore()
    const [isVisible, setIsVisible] = useState(false)
    const [Wheading, setWheading] = useState<IHeading>({
        id: "",
        title:"",
        arabicTitle:"",
        rows:0,
        isVisible:false
    })

    const handleSubmit =(heading: IHeading) =>{
        let newHeading = {...heading, id: uuid(), isVisible: isVisible}
        console.log("heading", newHeading)
            createWidgetHeading(newHeading)
    }

    return (
        <Segment clearing>
           <Header as="h1" content="Add Heading" sub color='teal' />
           <Divider/>
           <Formik validationSchema={HeadingValidation}  initialValues={Wheading} onSubmit={handleSubmit}>
                {({handleSubmit, isValid, isSubmitting, dirty})=> (
                    <Form className="ui form"  onSubmit={handleSubmit} autoComplete="off">
                          <Form.Group widths="equal">
                            <MyTextInput name="title" label="Heading Title" placeholder="Enter Heading Title" />
                            <MyTextInput name="arabicTitle" label="Arabic Heading Title" placeholder="Enter arabic Heading Title" />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <MyTextInput name="rows" label="Rows" placeholder="Enter No of rows" />
                            <Segment compact>
                            <Checkbox label="Status" fitted toggle name="isVisible" checked={isVisible} value={String(isVisible)} onChange={() => setIsVisible(!isVisible)}/>
                            </Segment>
                        </Form.Group>
                        <Button type="submit" primary icon='add' content="Submit" />
                    </Form>
                )}
                </Formik>
                    
        </Segment>
    )
})
