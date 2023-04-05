import React from 'react'
import {Input, CardBody, Card, CardSubtitle, CardTitle, InputGroup, CardText } from 'reactstrap'

export default function Teacherdetail ({details}) {
    return (
        <Card  className='teacherdetailcard'
            >
                <CardBody>
                    <CardTitle tag="h5">
                   All India Rank:{details.rank}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                       Registered Name:{details.name}
                    </CardSubtitle>
                    <CardText>
                       Studentid:{details.studentid}
                    </CardText>
                    <CardText>
                    Civil Services Examination
                    </CardText>
                    <CardText>
                    Exam date: 04/04/2023
                    </CardText>
                    <CardText>
                       Examcenter:{details.examcenter}
                    </CardText>
                    <div>Teacher Comment:</div>
                    <InputGroup>
                        <Input>
                        </Input>
                     </InputGroup>
                    <br />
                </CardBody>
            </Card>  
       
    )

}