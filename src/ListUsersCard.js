import React from 'react'
import {CardBody,Card,CardSubtitle,CardTitle,Button,CardText } from 'reactstrap'
import {useNavigate} from 'react-router-dom'
export default function ListUsersCard({data}){
  const nav=useNavigate();
    return(
      <div class="col-lg-6 mb-4">
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
</Card>
</div>
    )

}