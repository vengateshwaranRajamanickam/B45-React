import React from 'react'
import {Input,Button,Container, CardBody, Card, CardSubtitle, CardTitle, InputGroup, CardText } from 'reactstrap'

export default function Studentdetail({details,reset,deletefile,Updatedetail}) {
   
    return (
        <>
        <Card  className='studentdetailcard'>
                <CardBody>
                    <CardTitle tag="h5">
                   All India Rank:{details.rank}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                       Registered Name:{details.name}<Button className='Deletefile' color="danger" onClick={()=>deletefile(details.id)}>Delete</Button>
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
                    <div>College administration Comment/Feedback:</div><br/>
                    <Container className='commentoutline'>
                   <Container className='comment'>{details.comment}</Container>
                    </Container><br/>
                    <InputGroup>
                   
                        <Input 
                         id=""
                         name="firstname"
                         placeholder="teachercomment"
                         type="text" onChange={(e)=>details.comment=e.target.value}>
                        </Input>
                     </InputGroup>
                    </CardBody>
                    <Button color="info" onClick={()=>Updatedetail(details)} >Submit Comment</Button>
            </Card> 
                <Button color="primary"  onClick={()=>reset(0)}>
                Back
              </Button>
              </>
       
    )
    }