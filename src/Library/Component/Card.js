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
  let random=Math.floor(Math.random()*2)
  // onClick={() =>add(data.id)}
  return (
    <Container className="p1">
      <Card
        className="Bookcard">
        <CardBody>
          <CardTitle tag="h5">
            Book Name:{data.BookName}
            <Button className="Showdetails" color={ random===1?"info":"warning"} onClick={random===1?() =>add(data.Bookid):""}>
             { random===1?"Show Details":"Not in Library"}
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
