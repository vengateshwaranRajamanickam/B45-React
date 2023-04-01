import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'reactstrap'

export default function Itemlist({ para, add, remove }) {
    return (
        <Container>
            <Row>
                <Col className='waitinglist'>
                    <ListGroup >
                        <h2>WaitingList</h2>
                        {
                                para.filter(value => value.isCompleted === false)
                                .map((value, index) => (
                                    <ListGroupItem key={index}>
                                    {value.arr}
                                    <Button className='AddList' onClick={() => add(value.id)}>Add</Button>
                                    <Button className='RemoveList' onClick={() => remove(value.id)}>Remove </Button>
                                    </ListGroupItem>
                                ))
                        }
                        
                    </ListGroup>
                </Col >
                <Col className='conformlist'>
                    <ListGroup >
                        <h2>conformlist</h2>
                        {para.filter(value => value.isCompleted === true)
                            .map((value, index) => (
                                <ListGroupItem key={index}>

                                    {value.arr}
                                </ListGroupItem>
                            ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}