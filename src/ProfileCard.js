import React from 'react'
import {CardBody,Card,ListGroup,CardTitle,CardLink,CardText,ListGroupItem,Button } from 'reactstrap'
import { useNavigate } from "react-router-dom";

export default function ListUsersCard({data}){
    const nav=useNavigate();
    return(
        <div class="col-lg-2 mb-4 ">
        <Card
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="Card"
          src={data.image}
        />
        <CardBody>
          <CardTitle tag="h5">
          Name:{data.lastname}{data.firstname}
          </CardTitle>
          <CardText>
          Id:{data.id}
          </CardText>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>
          {data.emailid}
          </ListGroupItem>
          <ListGroupItem>
          {data.phonenumber}
          </ListGroupItem>
          <ListGroupItem>
          {data.location}
          </ListGroupItem>
        </ListGroup>
        <CardBody>
        <Button color="info" onClick={() => nav("/EditProfile/" + data.id)}>
        EditProfile
        </Button>
        </CardBody>
      </Card>
      </div>
    )

}