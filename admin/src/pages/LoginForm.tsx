import { ErrorMessage, Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Form, Grid, Header, Icon, Label, Segment } from 'semantic-ui-react'
import MyTextInput from '../components/controls/MyTextInput'
import { useStore } from '../store/store'

export default observer(function LoginForm() {
    const{userStore} = useStore()
    return (
        <div style={{position:'fixed', width:'100%', top:'30%', bottom:'50%'}}>
        <Grid centered columns={4}>
            <Grid.Row verticalAlign='middle'>
            <Grid.Column>
            <Segment>
            <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular color='teal'/>
      <Header.Content>Login</Header.Content>
    </Header>
        <Formik initialValues={{email:"", password:"", error:null}} 
        onSubmit={(values,{setErrors}) => userStore.login(values)
        .catch(error => setErrors({error:'Invalid email or password'}))}>
            {({handleSubmit, isSubmitting, errors})=>(
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput name='email' placeholder='Email Address'/>
                    <MyTextInput name='password' type='password' placeholder='Password'/>
                    <ErrorMessage  name='error' render={() => 
                    <Label style={{marginBottom:10}} basic color='red' content={errors.error}/>
                    }/>
                    <Button loading={isSubmitting} positive content='Login' type='submit' fluid/>
                </Form>
            )}
            </Formik>
            </Segment>
            </Grid.Column>
            </Grid.Row>
            </Grid>
            </div>

    )
})
