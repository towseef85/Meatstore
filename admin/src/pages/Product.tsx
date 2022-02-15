import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Header, Icon, Label, Menu, Segment, Table } from 'semantic-ui-react'
import LoadingComponent from '../components/LoadingComponent'
import { useStore } from '../store/store'
import AddImage from './AddImage'

function Product() {
  const {productStore, modelStore, commonStore} = useStore()
  const {loadProducts, products, ProductRegistry} = productStore

  useEffect(() => {
  if(ProductRegistry.size <= 1)  loadProducts()
  }, [ProductRegistry, loadProducts])
    return (
        <Segment raised>
            <Header as='h3' floated='left'>
                <Icon name='product hunt' color='blue'/>
                <Header.Content>Products</Header.Content>
            </Header>
            <Header floated='right'>
                <Button as={Link} to='/addproduct' color='linkedin' icon='add' content="Add Product"/>
            </Header>
            <Divider clearing/>
            {!commonStore.appLoaded ? <LoadingComponent content='Loading products....'/> :(
   <Table celled>
   <Table.Header>
     <Table.Row>
       <Table.HeaderCell></Table.HeaderCell>
       <Table.HeaderCell>Product Name</Table.HeaderCell>
       <Table.HeaderCell>Minimum Quantity</Table.HeaderCell>
       <Table.HeaderCell>Price</Table.HeaderCell>
       <Table.HeaderCell></Table.HeaderCell>
     </Table.Row>
   </Table.Header>

   <Table.Body>
    {products && products.map((p, index) => (
      <Table.Row key={p.id}>
         <Table.Cell>
          { p.photos && p.photos?.map(photo =>(
            
           <img key={photo.id} src={photo.url} width="70px"/>
          ))}
         </Table.Cell>
         <Table.Cell>
           {p.title}
         </Table.Cell>
         <Table.Cell>
           {p.minQuantity}
         </Table.Cell>
         <Table.Cell>
           {p.price}
         </Table.Cell>
         <Table.Cell>
           <Button.Group>
           <Button icon="images outline" content={p.photos?.length != 0 ? "Add more images": "Add images"} size='mini'  basic color='blue' onClick={() => {modelStore.openModal(<AddImage productId={p.id}/>)}}/>
      <Button icon="edit" content='Edit' size='mini'  basic color='green' />
      <Button icon="file alternate outline" content='View details' size='mini' basic color='orange'   />        
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

export default observer(Product)
