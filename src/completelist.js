

import React from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'

export default function input({finalTodo}) {
    return (
        <ListGroup>
            {finalTodo.map((value, index) => (
                <ListGroupItem>
                    key={index}
                    {value}
                </ListGroupItem>
            ))}
        </ListGroup>
    )}