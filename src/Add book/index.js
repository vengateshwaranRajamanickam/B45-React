
import { Formik } from "formik";
import { useNavigate,useParams} from 'react-router-dom'
import { Button,Container,Form,FormGroup,Label,Col,Input} from "reactstrap";
import {useEffect,useContext,useRef, useState} from 'react'
import {LibraryContext} from "../Context"
import axios from 'axios'
export default function AddBook() {
  const {id}=useParams();
  const {CreateBook}=useContext(LibraryContext);
  const nav=useNavigate();
  const inputref=useRef(); 
  const [TempBook,setTempBook]=useState([]);
   useEffect(()=>{
    inputref.current.focus()
  },[])
  useEffect(()=>{
    if(id){
      axios("https://63f4cd7a2213ed989c4ae285.mockapi.io/ap/v1/Library/"+id)
      .then(data =>setTempBook(data.data))
    }
  },[id])
  const validate = (values) => {
    const errors = {};
    if (!values.BookName) {
      errors.BookName = "Book Name is Required";
    } else if (values.BookName.length <3) {
      errors.BookName = "Book Name should have min length 3";
    }
    if (!values.Author) {
      errors.Author = "Author Name is Required";
    } else if (values.Author.length <5) {
      errors.Author = "Author Name should have min length 5";
    }
    if (!values.Bookyear) {
      errors.Bookyear = "Bookyear is required";
    } else if (0<values.Bookyear.length&&values.Bookyear.length <4) {
      errors.Bookyear = "Bookyear should have length of 4";
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
      onSubmit={(value)=>CreateBook(value,id)}
      validate={validate}
    >
      {({ handleSubmit, handleChange, touched, errors }) => {
        return(
       
          <Container  className="registerpage">
            <Form  className="registerpageform">
            <FormGroup row>
              <h3 className="BookListtitle mt-3">Add/Update Book Details</h3>
                <Label for="Book Name"tag="h4" sm={2}>
                  Book Name
                </Label>
                <Col sm={10}>
                  
                  <Input
                    id="bookname"
                    name="BookName"
                    placeholder={TempBook.BookName}
                    type="text"
                    onChange={handleChange}
                    innerRef={inputref}
                    //value={TempBook.BookName}
                  >
                  </Input>
                  {touched.BookName && errors.BookName ? (
            <div className="error">{errors.BookName}</div>
          ) : (
            ""
          )}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Author" tag="h4"sm={2}>
                Author
                </Label>
                <Col sm={10}>
                  <Input
                    id="Author"
                    name="Author"
                    placeholder={TempBook.Author}
                    type="text"
                    onChange={handleChange}
                    //value={TempBook.Author}
                  ></Input>
                   {touched.Author && errors.Author ? (
            <div className="error">{errors.Author}</div>
          ) : (
            ""
          )}
                </Col>
              </FormGroup>
              {/* <FormGroup row>
                <Label for="Book ID" sm={2}>
                  Book id
                </Label>
                <Col sm={10}>
                  <Input
                    id="book id"
                    name="id"
                    placeholder={TempBook.Bookid}
                    type="numberic"
                    onChange={handleChange}
                  ></Input>{touched.id && errors.id? (
            <div className="error">{errors.id}</div>
          ) : (
            ""
          )}
                </Col>
              </FormGroup> */}
              <FormGroup row>
                <Label for="Bookyear" tag="h4"sm={2}>
                Bookyear
                </Label>
                <Col sm={10}>
                  <Input
                    id="Bookyear"
                    name="Bookyear"
                    placeholder={TempBook.Bookyear}
                    type="numberic"
                    onChange={handleChange}
                    //value={TempBook.Bookyear}
                  ></Input>
                   {touched.Bookyear && errors.Bookyear? (
            <div className="error">{errors.Bookyear}</div>
          ) : (
            ""
          )}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Bookdescription"tag="h4" sm={2}>
                Bookdescription
                </Label>
                <Col sm={10}>
                  <Input
                    id="Bookdescription"
                    name="Bookdescription"
                    placeholder={TempBook.Bookdescription}
                    type="numberic"
                    onChange={handleChange}
                    //value={TempBook.Bookdescription}
                  ></Input>
                   {touched.Bookdescription && errors.Bookdescription? (
            <div className="error">{errors.Bookdescription}</div>
          ) : (
            ""
          )}
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
       
        )
      }}
      </Formik>
      )
}
