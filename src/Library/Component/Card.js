import React from "react";
import {
  Container,
  CardBody,
  Card,
  CardSubtitle,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

export default function Bookcard({ data, add }) {
  return (
    <Container className="p1">
      <Card
        className="Bookcard">
        <CardBody onClick={() =>add(data.id)}>
          <CardTitle tag="h5">
            Book Name:{data.BookName}
            <Button className="Showdetails" color="info">
              Show Details
            </Button>
          </CardTitle>
          <CardSubtitle className="Authorcard mb-2" >
           <h6 className="head"> Author Name: </h6>{data.Author}
          </CardSubtitle>
          <CardText><h6>Bookdescription: </h6>{data.Bookdescription}</CardText>
        </CardBody>
      </Card>
    </Container>
  );
}
