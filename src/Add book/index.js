
import { Formik } from "formik";
import { useNavigate} from 'react-router-dom'
import { Button,Container,Form,FormGroup,Label,Col,Input} from "reactstrap";
import {useEffect} from 'react'
import { useRef } from "react";
export default function AddBook() {
  const nav=useNavigate();
  const inputref=useRef(); 
  //  useEffect(()=>{
  //   inputref.current.focus()
  // },[])
  const validate = (values) => {
    const errors = {};
    if (!values.BookName) {
      errors.BookName = "Book Name is Required";
    } else if (values.BookName.length < 3) {
      errors.BookName = "Book Name should have min length 3";
    }
    if (!values.Bookyear) {
      errors.Bookyear = "Bookyear is required";
    } else if (0<values.Bookyear.length < 4) {
      errors.Bookyear = "Bookyear should have length of 4";
    } else if (!values.Bookyear.match("^[6-9][0-9]{9}$")) {
      errors.Bookyear = "Mobile number is not valid";
    }
    if (!values.Author) {
      errors.Author = "Author Name is Required";
    } else if (values.Author.length < 5) {
      errors.Author = "Author Name should have min length 5";
    }
    if (!values.Bookdescription) {
      errors.Bookdescription = "Bookdescription is Required";
    } 
    return errors;
  };

  return (
    <Formik className="registerpage"
      initialValues={{

        BookName: "",
        Bookyear: 0,
        Bookdescription: "",
        Author: "",
        id: 0
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={validate}
    >
      {({ handleSubmit, handleChange, touched, errors }) => {
        <div className="registerpage mt-5">
          <Container>
            <Form>
              <FormGroup row>
                <Label for="Book Name" sm={2}>
                  Book Name
                </Label>
                <Col sm={10}>
                  <Input
                    id="bookname"
                    name="BookName"
                    placeholder="Book Name"
                    type="text"
                    onChange={handleChange}
                    //innerRef={inputref}
                  >
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Author" sm={2}>
                Author
                </Label>
                <Col sm={10}>
                  <Input
                    id="Author"
                    name="Author"
                    placeholder="Author"
                    type="text"
                    onChange={handleChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Book ID" sm={2}>
                  Book id
                </Label>
                <Col sm={10}>
                  <Input
                    id="book id"
                    name="id"
                    placeholder="Book id"
                    type="numberic"
                    onChange={handleChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Bookyear" sm={2}>
                Bookyear
                </Label>
                <Col sm={10}>
                  <Input
                    id="Bookyear"
                    name="Bookyear"
                    placeholder="Rank"
                    type="numberic"
                    onChange={handleChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Bookdescription" sm={2}>
                Bookdescription
                </Label>
                <Col sm={10}>
                  <Input
                    id="Bookdescription"
                    name="Bookdescription"
                    placeholder="Bookdescription"
                    type="numberic"
                    onChange={handleChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={10}>
                  <Button color="info" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            <Button className="Back" color="primary" onClick={() => nav("/")}>
              Back
            </Button>
          </Container>
        </div>
      }}
      </Formik>
      )
}
