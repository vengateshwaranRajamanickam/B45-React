import React, { useContext,useEffect,useRef } from "react";
import {
  Col,
  Container,
  Label,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
import Context from "../Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from "formik";
export default function Register() {
const context = useContext(Context);
  const nav = useNavigate();
   const inputref=useRef();
  useEffect(()=>{
    inputref.current.focus()
  },[])
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Student Name is Required";
    } else if (values.name.length <3) {
      errors.name = "Student Name should have min length 3";
    }
    if (!values.studentid) {
      errors.studentid = "Studentid Name is Required";
    } else if (values.studentid<5) {
      errors.studentid = "Studentid Name should have min length 5";
    }
    if (!values.rank) {
      errors.rank = "rank is Required";
    }
      else if (values.rank <3) {
      errors.rank = "rank should have min length 3";
    } 
    return errors;
  };
  return (
    <Formik 
    initialValues={{
      name: "",
      studentid:0,
      rank: 0
    }}
    onSubmit={(value)=>context.StudentCreatedetail(value)}
    validate={validate}
  >
    {({ handleSubmit, handleChange, touched, errors }) => {
      return(
    <div className="registerpage ">
      <ToastContainer/>
      <Container className="form">
        <Form >
          <FormGroup row>
            <Label for="Name" sm={2}>
             <h5> Name</h5>
            </Label>
            <Col sm={10}>
              <Input style={{ backgroundColor: 'transparent' }} 
                id="name"
                name="name"
                placeholder="Name"
                type="text" autofocus
                onChange={handleChange}
               innerRef={inputref}
              >
              </Input>
              {touched.name && errors.name ? (
            <div className="error">{errors.name}</div>
          ) : (
            ""
          )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Student id" sm={2}>
            <h5>  Student id  </h5>  
            </Label>
            <Col sm={10}>
              <Input style={{ backgroundColor: 'transparent' }} 
                id="student id"
                name="studentid"
                placeholder="Student id"
                type="numberic"
                onChange={handleChange}
              ></Input>
              {touched.studentid && errors.studentid ? (
            <div className="error">{errors.studentid}</div>
          ) : (
            ""
          )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={2}>
             <h5>   Rank </h5>
            </Label>
            <Col sm={10}>
              <Input style={{ backgroundColor: 'transparent' }} 
                id="rank"
                name="rank"
                placeholder="Rank"
                type="numberic"
                onChange={handleChange}
              ></Input>
              {touched.rank && errors.rank ? (
            <div className="error">{errors.rank}</div>
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
    </div>
     )
    }}
      </Formik>
  );
}
