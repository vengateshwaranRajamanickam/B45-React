import React from 'react'
import {CardBody,Card,CardSubtitle,CardTitle,Button,CardText,Col} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
export default function ListUsersCard({data}){
  const nav=useNavigate();
    return(
     
        <Col xs={12} sm={8} md={6} lg={6}>
        <Card
  style={{
    width: '18rem'
  }}
>
<CardBody>
    <CardTitle tag="h5">
      Name:{data.lastname}{data.firstname}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     Id:{data.id}
    </CardSubtitle>
    <CardText>
      {data.emailid}
    </CardText>
    <CardText>
     {data.phonenumber}
    </CardText>
    <CardText>
  {data.location}
    </CardText>
    <Button color="info" onClick={() => nav("/EditUsers/" + data.id)}>
        EditUserinfo
        </Button>
  </CardBody>
</Card><br></br>
</Col>

    )

}