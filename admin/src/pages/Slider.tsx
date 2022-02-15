import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Header, Icon, Menu, Segment, Table } from 'semantic-ui-react'
import { useStore } from '../store/store'
import AddSlider from './AddSlider'

export default observer( function Slider() {
    const {sliderStore:{sliders, loadSliders}, modelStore} = useStore()
    useEffect(() => {
     loadSliders()
    }, [loadSliders])
    return (
        <>
        <Header as='h3' floated='left'>
            <Icon name='sliders' color='blue'/>
            <Header.Content>Sliders</Header.Content>
        </Header>
        <Header floated='right'>
            <Button onClick={() => modelStore.openModal(<AddSlider/>)} color='linkedin' icon='add' content="Add Slider"/>
        </Header>
        <Divider clearing/>
        <Table celled>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell></Table.HeaderCell>
    <Table.HeaderCell>Position</Table.HeaderCell>
    <Table.HeaderCell>Redirecting to</Table.HeaderCell>
    <Table.HeaderCell>Status</Table.HeaderCell>
    <Table.HeaderCell></Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body>
 {sliders && sliders.map((s, index) => (
   <Table.Row key={s.id}>
      <Table.Cell>
      <img src={`${s.imageSrc}/${s.imageName}`} width="50px" />
      </Table.Cell>
      <Table.Cell>
        {s.position}
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


    </>

)
})
