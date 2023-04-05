import React from 'react'
import {Container,  CardBody, Card, CardSubtitle, CardTitle, CardText} from 'reactstrap'

export default function Teachercard({ data, add }) {
    return (
        <Container className="p1">
        <Card  className='teachercard'
                style={{
                    border:"none"
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
            </Container>
      
    )

}