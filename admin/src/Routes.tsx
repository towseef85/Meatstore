import { observer } from 'mobx-react-lite';
import React from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { history } from '.';
import LoadingComponent from './components/LoadingComponent';
import ModalContainer from './components/ModalContainer';
import Layout from './layout/Layout';
import PrivateRoute from './layout/PrivateRoute';
import AddBlogs from './pages/AddBlogs';
import AddProduct from './pages/AddProduct';
import Blogs from './pages/Blogs';
import Category from './pages/Category';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import Order from './pages/Order';
import Product from './pages/Product';
import Setting from './pages/Setting';
import Units from './pages/Units';
import { useStore } from './store/store';

const WaitingComponent = (Component: any) => {
    return (props: any) => (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };

  export default observer(function Routes(){
    const {commonStore, userStore} = useStore();
  useEffect(() =>{
    if(commonStore.token){
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    }else{
      commonStore.setAppLoaded()
    }

  },[commonStore, userStore])

  if(!commonStore.appLoaded) return <LoadingComponent content='Loading app...'/>
      return(
        <>
        <ToastContainer position='top-right' hideProgressBar />
        <ModalContainer/>
     
      <Switch>
      <Route exact={true} path="/" component={LoginForm} />
      <PrivateRoute  path="/category" component={WaitingComponent(Category)} />
      <PrivateRoute  path="/product" component={WaitingComponent(Product)} />
      <PrivateRoute  path="/addproduct" component={WaitingComponent(AddProduct)} />
      <PrivateRoute  path="/units" component={WaitingComponent(Units)} />
      <PrivateRoute  path="/setting" component={WaitingComponent(Setting)} />
      <PrivateRoute  path="/order" component={WaitingComponent(Order)} />
      <PrivateRoute  path="/home" component={WaitingComponent(Home)} />
      <PrivateRoute  path="/blogs" component={WaitingComponent(Blogs)} />
      <PrivateRoute  path="/addblog" component={WaitingComponent(AddBlogs)} />
      </Switch>
 
      </>
      )
  })