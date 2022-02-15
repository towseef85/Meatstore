import { observer } from 'mobx-react-lite'
import React,{ useEffect } from 'react'
import { Button, Divider, Header, Icon, Label, Menu, Segment, Table } from 'semantic-ui-react'
import LoadingComponent from '../components/LoadingComponent'
import { useStore } from '../store/store'
import AddCategory from './AddCategory'

function Category() {
  const {categoryStore, modelStore:{openModal}, commonStore:{appLoaded}} = useStore()
  const {loadCategories, categories, CategoryRegistry} = categoryStore

  useEffect(() => {
    if(CategoryRegistry.size <= 1) loadCategories()
   
  }, [CategoryRegistry.size, loadCategories])
   
    return (
        <Segment raised>
            <Header as='h3' floated='left'>
                <Icon name='chess queen' color='blue'/>
                <Header.Content>Categories</Header.Content>
            </Header>
            <Header floated='right'>
                <Button color='linkedin'  icon='add' content="Add Category" onClick={() => openModal(<AddCategory/>)}/>
            </Header>
            <Divider clearing/>
            {!appLoaded ? 
            <LoadingComponent content="Loading Categories...." />: (
              <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Arabic Name</Table.HeaderCell>
                  <Table.HeaderCell>Show in Navigation</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
          
              <Table.Body>
             
                  {categories && categories.map((c, index) => (
                    <Table.Row key={c.id}>
                    <Table.Cell>
                      
                      <img src={`${c.imageSrc}/${c.imageName}`} width="50px" />
                    </Table.Cell>
                    <Table.Cell>
                    {index == 0 ? <Label ribbon color='green' pointing='right' className='lb-ab'>{c.title}</Label> : <div>{c.title}</div>}
                      
                    </Table.Cell>
                    <Table.Cell>
                      {c.arabicTitle}
                    </Table.Cell>
                    <Table.Cell>
                      
                      {c.showInNav == true ? "Show" : "Hide"}
                    </Table.Cell>
                    <Table.Cell>
                      <Button.Group>
                 <Button icon="edit" content='Edit'  basic color='green' />
                 <Button icon="delete" content='Delete' basic color='red'   />        
                 </Button.Group>
                      </Table.Cell>
                    </Table.Row>
          
                  ))}
          
              </Table.Body>
          
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='5'>
                    <Menu floated='right' pagination>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                      </Menu.Item>
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          
            )}
           

        </Segment>
    )
}

export default observer(Category)
