import React from 'react'
import {Container,  CardBody, Card, CardSubtitle, CardTitle, CardText,Button} from 'reactstrap'

export default function Studentcard({ data, add,}) {
    return (
        <Container className="p1">
        <Card  className='studentcard'
                style={{
                    border:"none"
                }}
            >
                <CardBody onClick={() => add(data.id)}>
                    <CardTitle tag="h5">
                        Rank:{data.rank}<Button className='Showdetails' color="info">Show Details</Button>
                    </CardTitle>
                    <CardSubtitle className='mb-2'
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