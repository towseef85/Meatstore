import Layout from "./Layout/Layout";
import {BrowserRouter, Router as router, Route, Switch} from 'react-router-dom'
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import { ToastContainer } from 'react-toastify';
import PrivateRoute from "./Layout/PrivateRoute";
import Login from "./Pages/Login";
import { useStore } from "./stores/store";
import { useEffect } from "react";
import Modal from "./components/Modal/Modal";
import { observer } from "mobx-react-lite";
import Checkout from "./Pages/Checkout";
import ShoppingCart from "./Layout/Header/Cart/ShoppingCart";
import OrderCompleted from "./Pages/OrderCompleted";





export const WaitingComponent = (Component:any) => {
    return (props: any) => (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };

  export default observer(function Router() {
   
      return(
        <>
         <Modal/>
         <ShoppingCart/>
        <ToastContainer position='top-right' hideProgressBar />
      <Switch>
          <Route exact={true} path='/' component={WaitingComponent(Home)}/>
          <Route  path='/Category/:id' component={WaitingComponent(Category)}/>
          <Route  path='/Product/:id' component={WaitingComponent(Product)}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute  path='/checkout' component={WaitingComponent(Checkout)}/>
          <PrivateRoute  path='/profile/:id' component={WaitingComponent(Profile)}/>
          <PrivateRoute path='/ordercomplete' component={WaitingComponent(OrderCompleted)}/>
      </Switch>
      </>
      )
  })