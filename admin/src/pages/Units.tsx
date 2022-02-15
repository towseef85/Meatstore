import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Button, Divider, Header, Icon, Label, Menu, Segment, Table } from 'semantic-ui-react'
import { useStore } from '../store/store'

export default observer( function Units() {
    const {unitStore} = useStore()
    useEffect(() => {
      unitStore.loadUnits();
     
    }, [])
    return (
        <Segment raised>
        <Header as='h3' floated='left'>
            <Icon name='ordered list' color='blue'/>
            <Header.Content>Units</Header.Content>
        </Header>
        <Header floated='right'>
            <Button color='linkedin' icon='add' content="Add Unit"/>
        </Header>
        <Divider clearing/>
        <Table celled>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell>Title</Table.HeaderCell>
    <Table.HeaderCell>Arabic Title</Table.HeaderCell>
    <Table.HeaderCell>Symbol</Table.HeaderCell>
    <Table.HeaderCell></Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body>
  
    {unitStore.Units && unitStore.Units.map(u => 
    <Table.Row>
        <Table.Cell>{u.title}</Table.Cell>
        <Table.Cell>{u.arabicTitle}</Table.Cell>
        <Table.Cell>{u.symbol}</Table.Cell>
        <Table.Cell>
            <Button.Group>
       <Button icon="edit" content='Edit'  basic color='green' />
       <Button icon="delete" content='Delete' basic color='red'   />        
       </Button.Group>
            </Table.Cell>
    </Table.Row>
    )}
  
</Table.Body>

<Table.Footer>
  <Table.Row>
    <Table.HeaderCell colSpan='4'>
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


