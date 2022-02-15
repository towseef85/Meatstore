import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Button, Divider, Header, Icon, Label, Menu, Segment, Table } from 'semantic-ui-react'
import { useStore } from '../store/store'
import OrderDetails from './OrderDetails'
import OrderStatus from './OrderStatus'

export default observer(function Order() {
  const {orderStore:{loadOrders, GetOrders, orderRegistery}, modelStore:{openModal}} = useStore()
  useEffect(()=>{
    if(orderRegistery.size < 1) loadOrders()
  },[ loadOrders])
  {GetOrders.map(o => console.log(toJS(o)))}
    return (
        <Segment raised>
        <Header as='h3' floated='left'>
            <Icon name='ordered list' color='blue'/>
            <Header.Content>Orders</Header.Content>
        </Header>
        <Header floated='right'>
            {/* <Button color='linkedin' icon='add' content="Add Category"/> */}
        </Header>
        <Divider clearing/>
        <Table celled>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell>#</Table.HeaderCell>
    <Table.HeaderCell>Order Id</Table.HeaderCell>
    <Table.HeaderCell>Customer</Table.HeaderCell>
    <Table.HeaderCell>Total</Table.HeaderCell>
    <Table.HeaderCell>Status</Table.HeaderCell>
    <Table.HeaderCell>Update Status</Table.HeaderCell>
    <Table.HeaderCell>Details</Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body>
  {GetOrders.map((order, index) => (
    <Table.Row key={order.id}>
      <Table.Cell>
        {index+1}
      </Table.Cell>
      <Table.Cell>
        {order.id}
      </Table.Cell>
      <Table.Cell>
        {order.user?.displayName}
      </Table.Cell>
      <Table.Cell>
        {order.total}
      </Table.Cell>
     
      <Table.Cell>
        {order.status== "In-Progress" && <Header as='h5' color={"yellow"} key="">{order.status}</Header>}
        {order.status== "Approved" && <Header as='h5' color={"green"} key="">{order.status}</Header>}
        {order.status== "Rejected" && <Header as='h5' color={"red"} key="">{order.status}</Header>}

      </Table.Cell>
      <Table.Cell>
      <Button inverted size='mini' color='blue' onClick={()=>{openModal(<OrderStatus orderId={order.id}/>)}}>Update Status</Button>
      </Table.Cell>
    
      <Table.Cell>
        <Button inverted color='green' size='mini'  onClick={()=>{openModal(<OrderDetails order={order}/>)}}>View Details</Button>
      </Table.Cell>
    </Table.Row>
  ))}

</Table.Body>

<Table.Footer>
  <Table.Row>
    <Table.HeaderCell colSpan='8'>
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
</Segment>
    )
})

