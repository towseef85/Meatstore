import { Link } from "react-router-dom";
import { Button, Divider, Header, Icon, Segment } from "semantic-ui-react";

export default function Blogs() {
    return (
        <Segment raised>
        <Header as='h3' floated='left'>
            <Icon name='chess queen' color='blue'/>
            <Header.Content>Categories</Header.Content>
        </Header>
        <Header floated='right'>
            <Button as={Link} to='/addblog' color='linkedin'  icon='add' content="Add Blog"/>
        </Header>
        <Divider clearing/>
        </Segment>
    )
}
