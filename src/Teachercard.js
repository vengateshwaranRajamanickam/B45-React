import React from 'react'
import {Container,  CardBody, Card, CardSubtitle, CardTitle, CardText} from 'reactstrap'

export default function TeacherCard({ data, add }) {
    return (
        <Container className="p1">
        <Card  className='teachercard'
                style={{
                    border:"none"
                }}
            >
                <CardBody onClick={() => add(data.id)}>
                    <CardTitle tag="h5">
                    Name:{data.teachername}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Department:{data.teacherdepartment}
                    </CardSubtitle>
                    <CardText>
                        Teacherid:{data.teacherid}
                    </CardText>
                </CardBody>
            </Card>
            </Container>
      
    )

}