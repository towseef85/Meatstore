import { toJS } from 'mobx'
import { observer, Observer } from 'mobx-react-lite'
import {useEffect, useState} from 'react'
import { Button, Divider, Header, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { useStore } from '../store/store'
import AddHeading from './AddHeading'
import AddWidgetItem from './AddWidgetItem'
import WidgetItemDetails from './WidgetItemDetails'

export default observer( function WidgetHeading() {
    const {headingStore:{loadHeadings, headingRegistry, WHeadings},
            modelStore} = useStore()
    useEffect(() => {
      if(headingRegistry.size<=1) loadHeadings()
    }, [headingRegistry.size, loadHeadings])
    console.log("Widget Heading",WHeadings.map(w => toJS(w.widgetItems)));
    return (
    
        <>
        <Header as='h3' floated='left'>
            <Icon name='heading' color='blue'/>
            <Header.Content>Widget Heading</Header.Content>
        </Header>
        <Header floated='right'>
            <Button onClick={() => modelStore.openModal(<AddHeading/>)} color='linkedin' icon='add' content="Add Heading"/>
        </Header>
        <Divider clearing/>
        <Table celled>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell>Heading</Table.HeaderCell>
    <Table.HeaderCell>Heading in Arabic</Table.HeaderCell>
    <Table.HeaderCell>Rows</Table.HeaderCell>
    <Table.HeaderCell>Status</Table.HeaderCell>
    <Table.HeaderCell></Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body>
 {WHeadings && WHeadings.map((h, index) => (
   <Table.Row key={h.id}>
      <Table.Cell>
      {index == 0 ? <Label ribbon color='green' pointing='right' className='lb-ab'>{h.title}</Label> : <div>{h.title}</div>}
      </Table.Cell>
      <Table.Cell>
        {h.arabicTitle}
      </Table.Cell>
      <Table.Cell>
        {h.rows}
      </Table.Cell>
        <Table.Cell>
        {h.isVisible ? "Active": "InActive"}
        </Table.Cell>
      <Table.Cell>
        <Button.Group>
        <Button icon="compass outline" size='mini' content='Add Items' onClick={() => modelStore.openModal(<AddWidgetItem headingId={h.id}/>)} basic color="blue"/>
        <Button icon='tasks' content='View Items' onClick={() => modelStore.openModal(<WidgetItemDetails widgetItems = {h.widgetItems!} />)} size='mini' basic color='orange'/>
        <Button icon="edit" content='Edit' size='mini'  basic color='green' />
        </Button.Group>
        <Button.Group style={{paddingTop:'10px'}}>
   
           
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
