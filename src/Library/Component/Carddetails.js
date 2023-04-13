import React from "react";
import {
  Button,
  CardBody,
  Card,
  CardSubtitle,
  CardTitle,
  CardText,
  Container
} from "reactstrap";
import { useNavigate } from "react-router-dom";
export default function Bookdetail({
  details,
  reset,
  deletefile
}) {
  const nav=useNavigate();
  return (
    <>
      <Card className="Bookdetailcard m-4">
        <CardBody>
          <CardTitle tag="h5">Book id:{details.id}</CardTitle>
          <CardSubtitle className="mb-2 ">
          Book Name: {details.BookName}
            <Button
              className="Deletefile"
              color="danger"
              onClick={() => deletefile(details.id)}
            >
              Delete
            </Button>
          </CardSubtitle>
          <CardText>Library Name: National Library</CardText>
          <CardText>Author:{details.Author}</CardText>
          <CardText>Published Year: {details.Bookyear}</CardText>
          <div>Book Cover:</div>
          <Container className="commentoutline">
            <Container className="comment">{details.Bookdescription}</Container>
          </Container>
          <br />
        </CardBody>
        <Button color="warning" onClick={() =>nav("./addbook/"+1)}>
          Update Book Details
        </Button>
      </Card>
      <Button className="m-4" color="info" onClick={() => reset(0)}>
        Back
      </Button>
    </>
  );
}
