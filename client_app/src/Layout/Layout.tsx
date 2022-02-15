import { observer } from 'mobx-react-lite'
import React,{Fragment} from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'


function Layout(props: any) {
    return (
        <Fragment>
          <Header/>
            {props.children}
          <Footer/>
        </Fragment>  
    )
}

export default observer(Layout)
