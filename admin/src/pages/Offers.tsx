import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Button, Divider, Header, Icon, Label, Menu, Segment, Table } from 'semantic-ui-react'
import { useStore } from '../store/store'
import AddOffers from './AddOffers'

export default observer(function Offers() {
    const{modelStore,offerStore:{loadOffers, OfferRegistry, Woffers}} = useStore()
    useEffect(() => {
        if(OfferRegistry.size<1) loadOffers()
    }, [OfferRegistry.size, loadOffers])
    return (
        <>
        <Header as='h3' floated='left'>
            <Icon name='osi' color='blue'/>
            <Header.Content>Offers</Header.Content>
        </Header>
        <Header floated='right'>
            <Button onClick={() => modelStore.openModal(<AddOffers/>)} color='linkedin' icon='add' content="Add Offer"/>
        </Header>
        <Divider clearing/>
        <Table celled>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell></Table.HeaderCell>
    <Table.HeaderCell>Start Date</Table.HeaderCell>
    <Table.HeaderCell>End Date</Table.HeaderCell>
    <Table.HeaderCell>Redirect to</Table.HeaderCell>
    <Table.HeaderCell>Status</Table.HeaderCell>
    <Table.HeaderCell></Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body>
 {Woffers && Woffers.map((s, index) => (
   <Table.Row key={s.id}>
      <Table.Cell>
      <img src={`${s.imageSrc}/${s.imageName}`} width="50px" />
      </Table.Cell>
      <Table.Cell>
        {s.startDate}
      </Table.Cell>
      <Table.Cell>
        {s.endDate}
      </Table.Cell>
      <Table.Cell>
        {s.redirectTo}
      </Table.Cell>
        <Table.Cell>
        {s.isVisible ? "Active": "InActive"}
        </Table.Cell>
      <Table.Cell>
        <Button.Group>
        
   <Button icon="edit" content='Edit' size='mini'  basic color='green' />
   <Button icon="delete" content='Delete' size='mini' basic color='red'   />        
   </Button.Group>
        </Table.Cell>
   </Table.Row>
 ))}
</Table.Body>

<Table.Footer>
  <Table.Row>
    <Table.HeaderCell colSpan='6'>
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


    </>
    )
})
