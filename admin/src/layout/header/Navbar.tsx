import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, Menu, Image, Dropdown, Header, Icon } from 'semantic-ui-react';
import { useStore } from '../../store/store';
import './Navbar.css'

function Navbar() {
    const{userStore:{user, logout}} = useStore()
    return (
        <Menu inverted fixed='top'  color='teal'>

            <Container fluid>
                <Menu.Item as='a'  className="header-menu" header>
                   
                    <Header as='h3' color='teal'>
                    <Icon name='dashcube'/> Eshop-Admin
                    </Header>
                    
                </Menu.Item>
                <Menu.Item position='right' style={{marginRight:'100px'}}>
                    <Image src='/assets/user.png' avatar spaced='right'/>
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu>

                        <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text='My Profile' icon='user'/>
                        <Dropdown.Item onClick={logout} text='Logout' icon='power'/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>

        </Menu>
    )
}

export default observer(Navbar)
