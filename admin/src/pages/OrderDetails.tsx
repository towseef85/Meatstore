import { Divider, Grid, Header, Icon, List, Segment } from "semantic-ui-react";
import { IOrder } from "../models/Order";

interface Props{
    order: IOrder
}

export default function OrderDetails({order}: Props) {
    return (
        <Segment raised>
        <Header as='h3'>
            <Icon name='book' color='blue'/>
            <Header.Content>Order Details</Header.Content>
        </Header>
        <Divider clearing/>
        <Grid columns={2} divided>
            
            <Grid.Row>
                <Grid.Column>
                    <List>
                        <List.Item>Order Id : <b> {order.id}</b></List.Item>
                        <List.Item>Order Date :<b> {order.createdOn}</b></List.Item>
                        
                    </List>
                </Grid.Column>
                <Grid.Column>
                <List>
                        <List.Item>Status :<b> {order.status}</b></List.Item>
                        <List.Item>Order Total :<b> {order.total}</b></List.Item>
                        
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </Segment>
    )
}
