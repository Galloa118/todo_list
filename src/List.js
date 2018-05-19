import React from 'react';
import { ListGroup,  ListGroupItem } from 'reactstrap';

const List = props => (
    <ListGroup>
            {
            props.list_array.map((item, index) => <ListGroupItem key={index}>{item}</ListGroupItem>)
            }
    </ListGroup>
);

export default List;