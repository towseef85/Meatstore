import React, { ReactComponentElement } from 'react'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom'
import { useStore } from '../store/store'

interface Props extends RouteProps{
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export default function PrivateRoute({component: Component, ...rest}: Props) {
    const {userStore:{isLoggedIn}, commonStore:{token}} = useStore()
    return (
       <Route {...rest} 
       render={(props) => token ? <Component {...props} /> : <Redirect to='/' />}
       />
    )
}
