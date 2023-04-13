import React, { useContext } from "react";
import Card from "./Component/Card";
import Carddetail from "./Component/Carddetails";
import { Row, Col, Container } from "reactstrap";
import {LibraryContext} from "../Context";
import Search from './Component/Search'
export default function Student() {
  const {Bookarray, DeleteBook,BookShow,Showdetail}= useContext(LibraryContext);
  return (
    <Row className="Librarypage">
      <Search/>
      <Col
        xs={12}
        sm={Showdetail.length === 0 ? 12 : 8}
        md={Showdetail.length === 0 ? 12 : 6}
      >
        {Bookarray.map((value, index) => (
          <>
          <Container>
             <Card 
              key={index}
              data={value}
              add={BookShow}
            />
            <br />
            </Container>
          </>
        ))}
      </Col>
      <Col
        xs={12}
        sm={Showdetail.length === 0 ? 0: 8}
        md={Showdetail.length === 0 ? 0 : 6}
      >
        {Showdetail.map((value, index) => (
          <Carddetail
            key={index}
            details={value}
            reset={BookShow}
            deletefile={DeleteBook}
          />
        ))}
      </Col>
    </Row>
  );
}
