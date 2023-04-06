import React from 'react'
import {Button,Input, CardBody,Container, Card, CardSubtitle, CardTitle, InputGroup, CardText } from 'reactstrap'

export default function Teacherdetail ({details,reset,deletefile, Updatedetail}) {
    return (
        <>
        {/* <Card  className='teacherdetailcard'
            >
                <CardBody>
                    <CardTitle tag="h5">
                    Registered Name:{details.teachername}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >    Department:{details.teacherdepartment}<Button className='Deletefile' color="danger" onClick={()=>deletefile(details.id)}>Delete</Button>
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
                    <div>College administration Comment/Feedback:</div><br/>
                    <Container className='commentoutline'>
                   <Container className='comment'>{details.teachercomment}</Container>
                    </Container><br/>
                    <InputGroup>
                   
                        <Input 
                         id=""
                         name="firstname"
                         placeholder="teachercomment"
                         type="text" onChange={(e)=>details.teachercomment=e.target.value}>
                        </Input>
                     </InputGroup>
                    </CardBody>
                    <Button color="info" onClick={()=>Updatedetail(details)} >Submit Comment</Button>
            </Card> 
            <Button color="primary" onClick={()=>reset(0)}>
            Back
          </Button>
    </> */}
    </>
    )

}