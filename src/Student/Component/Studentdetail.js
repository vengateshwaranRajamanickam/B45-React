import React from 'react'
import {Input,Button, CardBody, Card, CardSubtitle, CardTitle, InputGroup, CardText } from 'reactstrap'

export default function Studentdetail({details,reset,Updatedetail}) {
   
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
                    <div>Teacher Comment/Feedback:</div>
                    <div >{details.comment}</div>
                    <InputGroup>
                   
                    {/* <Input 
                         id=""
                         name="firstname"
                         placeholder="comment"
                         type="text" onChange={(e)=>details.comment=e.target.value}>
                           </Input> */}
                     </InputGroup>
                     </CardBody>
                     <Button color="primary"  onClick={()=>Updatedetail(details)}>Submit Comment</Button>
                </Card>  
              
                <Button color="primary"  onClick={()=>reset(0)}>
                Back
              </Button>
              </>
       
    )

}
//<Button className='Deletefile' color="danger" onClick={()=>deletefile(details.id)}>Delete</Button>