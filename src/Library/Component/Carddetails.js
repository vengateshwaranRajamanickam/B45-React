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

export default function Bookdetail({
  details,
  reset,
  deletefile
}) {
  return (
    <>
      <Card className="Bookdetailcard">
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
        <Button color="warning" >
          Submit Comment
        </Button>
      </Card>

      <Button color="info" onClick={() => reset(0)}>
        Back
      </Button>
    </>
  );
}
