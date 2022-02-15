import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Divider, Grid, Header, Icon, Segment, Table, Image } from "semantic-ui-react";

function Home() {
  return (
    <Segment>
      <Header as="h4">
        <Icon name="dashboard" />
        <Header.Content>Dashboard</Header.Content>
      </Header>
      <Divider />
      <Grid columns={4} divided>
        <Grid.Row>
          <Grid.Column>
            <Card color="teal">
              <Card.Content
                className="db-widget"
                header="Total Products"
                textAlign="center"
              />
              <Card.Content description="" />
              <Card.Content extra>
                <Icon name="user" />4 Friends
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card color="teal">
              <Card.Content
                className="db-widget"
                header="Total Products"
                textAlign="center"
              />
              <Card.Content description="" />
              <Card.Content extra>
                <Icon name="user" />4 Friends
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card color="teal">
              <Card.Content
                className="db-widget"
                header="Total Products"
                textAlign="center"
              />
              <Card.Content description="" />
              <Card.Content extra>
                <Icon name="user" />4 Friends
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card color="teal">
              <Card.Content
                className="db-widget"
                header="Total Products"
                textAlign="center"
              />
              <Card.Content description="" />
              <Card.Content extra>
                <Icon name="user" />4 Friends
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2} divided>
        <Grid.Row>
            <Grid.Column>
                <Header as='h4' >
                    <Icon name='product hunt'/>
                    New Products
                </Header>
                <Divider/>
            <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Employee</Table.HeaderCell>
        <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
            <Header.Content>
              Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>11</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
            </Grid.Column>
        
        <Grid.Column>
        <Header as='h4' >
                    <Icon name='ordered list'/>
                    New Orders
                </Header>
                <Divider/>
                <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>No Action</Table.Cell>
        <Table.Cell selectable>
          <a href='#'>Edit</a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell selectable>
          <a href='#'>Edit</a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell selectable>
          <a href='#'>Edit</a>
        </Table.Cell>
      </Table.Row>
      <Table.Row warning>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>No Action</Table.Cell>
        <Table.Cell selectable warning>
          <a href='#'>Requires change</a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell positive>Approved</Table.Cell>
        <Table.Cell selectable positive>
          <a href='#'>Approve</a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell negative>Denied</Table.Cell>
        <Table.Cell selectable negative>
          <a href='#'>Remove</a>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default observer( Home);
