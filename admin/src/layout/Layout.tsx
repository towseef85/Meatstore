import React from 'react'
import { Grid } from 'semantic-ui-react'
import Navbar from './header/Navbar'
import SideNav from './header/SideNav'
import './Layout.css'

function Layout(props: any) {
    return (
        <>
           <Navbar/>
           <Grid>
               <Grid.Row>
                   <Grid.Column width={3}>
                       <SideNav/>
                   </Grid.Column>
                   <Grid.Column width={12} >
                       <div className="mt-1">                       
                       {props.children}
                       </div>

                   </Grid.Column>
               </Grid.Row>
          </Grid> 
        </>
    )
}

export default Layout
