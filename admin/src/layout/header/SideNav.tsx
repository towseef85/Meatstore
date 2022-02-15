import React from 'react'
import { Link } from 'react-router-dom'
import {  Accordion, Header, Icon,  Menu, Sidebar } from 'semantic-ui-react'


function SideNav() {
    return (
      
     
          <Sidebar
            as={Menu}
            
            direction='left'
            inverted
            vertical
            visible={true}
            animation='uncover'
          >
            <Menu.Item>
            <Header as='h4' icon  textAlign='center' color='teal'>
            <Icon name='users' circular color='grey' />
            <Header.Content>User Name</Header.Content>
            </Header>
            </Menu.Item>
            <Menu.Item as={Link} to='/home' icon >
            <Icon as='i' name='dashboard' corner='top left' className='menu-icon' color='teal'/>
              Dashboard</Menu.Item>
            <Menu.Item as={Link} to='/category' icon>
            <Icon as='i' name='chess queen' corner='top left' className='menu-icon' color='teal'/>
              Category
            </Menu.Item>
            <Menu.Item as={Link} to='/product' icon>
            <Icon as='i' name='product hunt' corner='top left' className='menu-icon' color='teal'/>
              Products
            </Menu.Item>
            <Menu.Item as={Link} to='/setting' icon>
              <Icon as='i' name='setting' corner='top left' className='menu-icon' color='teal'/>
              Settings
            </Menu.Item>
            <Menu.Item as={Link} to='/blogs' icon>
            <Icon as='i' name='ordered list' corner='top left' className='menu-icon' color='teal'/>
              Blogs
            </Menu.Item>
            <Menu.Item as={Link} to='/order' icon>
            <Icon as='i' name='ordered list' corner='top left' className='menu-icon' color='teal'/>
              Orders
            </Menu.Item>
          </Sidebar>
        
    )
}

export default SideNav
