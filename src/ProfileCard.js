import React from 'react'
import {CardBody,Card,ListGroup,CardTitle,Col,CardText,ListGroupItem,Button } from 'reactstrap'
import { useNavigate } from "react-router-dom";

export default function ListUsersCard({data}){
    const nav=useNavigate();
    return(
      <Col xs={12} sm={8} md={6} lg={6}>
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
      </Card><br></br>
      </Col>
    )

}