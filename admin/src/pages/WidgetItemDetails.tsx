import { Observer } from "mobx-react-lite"
import { IWidgetItems } from "../models/Widgets/WidgetItems"
import { Button, Divider, Header, Icon, Label, Menu, Table } from 'semantic-ui-react'

interface Props{
    widgetItems: IWidgetItems[]
}

export default function WidgetItemDetails({widgetItems}: Props) {
    return (
        <>
          <Header as="h1" content="Widget Item List" sub color='teal' />
           <Divider/>
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Redirect To</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
            {widgetItems.map((c, index)=>(
                <Table.Row key={c.id}>
                    <Table.Cell>{index+1}</Table.Cell>
                    <Table.Cell>
                    <img src={`${c.imageSrc}/${c.imageName}`} width="50px" />
                    </Table.Cell>
                    <Table.Cell>
                        {c.title}
                    </Table.Cell>
                    <Table.Cell>
                        {c.isVisible == true ? "Active": "InActive"}
                    </Table.Cell>
                    <Table.Cell>
                        {c.redirectTo}
                    </Table.Cell>
                    <Table.Cell>
                    <Button icon="trash" content='Delete' size='mini'  basic color='red' />
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
}
