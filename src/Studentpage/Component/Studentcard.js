import React from 'react'
import { Container,Row, CardBody, Card, CardSubtitle, CardTitle, Button, CardText, Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
export default function ListUsersCard({ data ,add}) {
    const nav = useNavigate();
    return (
        <Col  xs={12} >
            
            <Card 
                style={{
                    width: '18rem'
                }}
            >
                <CardBody onClick={() => add(data.id)}>
                    <CardTitle tag="h5">
                    Rank:{data.rank}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Name:{data.name}
                    </CardSubtitle>
                    <CardText>
                        Studentid:{data.studentid}
                    </CardText>
                    
                </CardBody>
            </Card>
            <br />
           
        </Col>
    )

}