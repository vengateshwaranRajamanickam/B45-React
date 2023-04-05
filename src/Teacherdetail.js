import React from 'react'
import {Input, CardBody, Card, CardSubtitle, CardTitle, InputGroup, CardText } from 'reactstrap'

export default function Teacherdetails({details}) {
    return (
        <Card  className='teacherdetailcard'
            >
                <CardBody>
                    <CardTitle tag="h5">
                    Registered Name:{details.teachername}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >    Department:{details.teacherdepartment}
                    </CardSubtitle>
                    <CardText>
                    Teacher Id:{details.teacherid}
                    </CardText>
                    <CardText>
                    Grade:II
                    </CardText>
                    <CardText>
                    Join Date: 04/04/2023
                    </CardText>
                    <div>College administration Comment:</div>
                    <InputGroup>
                        <Input>
                        </Input>
                     </InputGroup>
                    <br />
                </CardBody>
            </Card>  
       
    )

}