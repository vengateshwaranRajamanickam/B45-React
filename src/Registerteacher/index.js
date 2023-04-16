import React, { useContext,useRef,useEffect} from "react";
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
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
export default function TeacherRegister() {
  const context = useContext(Context);
  const nav = useNavigate();
  const inputref=useRef();
  useEffect(()=>{
    inputref.current.focus()
  },[])
  const validate = (values) => {
    const errors = {};
    if (!values.teachername) {
      errors.teachername = "Teachername is Required";
    } else if (values.teachername.length <3) {
      errors.teachername = "Teachername should have min length 3";
    }
    if (!values.teacherdepartment) {
      errors.teacherdepartment = "teacherdepartment Name is Required";
    } else if (values.teacherdepartment.length <5) {
      errors.teacherdepartment = "Teacherdepartment Name should have min length 5";
    }
    if (!values.teacherid) {
      errors.teacherid = "Teacherid is Required";
    }else if (values.teacherid <3) {
    errors.teacherid = "Teacherid should have min length 3";
    } 
    return errors;
  };

  return (
    <Formik 
      initialValues={{
        teachername: "",
        teacherdepartment: "",
        teacherid: 0
      }}
      onSubmit={(value)=>context.TeacherCreatedetail(value)}
      validate={validate}
    >
      {({ handleSubmit, handleChange, touched, errors }) => {
        return(
    <div className="registerteacherpage mt-5">
      <ToastContainer/>
      <Container className="form">
        <Form>
          <FormGroup row>
            <Label for="Teachername" sm={2}>
             <h5> Teachername</h5> 
            </Label>
            <Col sm={10}>
              <Input style={{ backgroundColor: 'transparent' }} 
                id="teachername"
                name="teachername"
                placeholder="Teachername"
                type="text"
                onChange={handleChange}
                innerRef={inputref}
              ></Input>
               {touched.teachername && errors.teachername ? (
            <div className="error">{errors.teachername}</div>
          ) : (
            ""
          )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={2}>
            <h5>Teacher department </h5>  
            </Label>
            <Col sm={10}>
              <Input style={{ backgroundColor: 'transparent' }} 
                id="teacherdepartment"
                name="teacherdepartment"
                placeholder="Teacherdepartment"
                type="text"
                onChange={handleChange}
              ></Input>
              {touched.teacherdepartment && errors.teacherdepartment ? (
            <div className="error">{errors.teacherdepartment}</div>
          ) : (
            ""
          )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
            <h5>  Teacher id  </h5> 
            </Label>
            <Col sm={10}>
              <Input style={{ backgroundColor: 'transparent' }} 
                id="teacherdid"
                name="teacherid"
                placeholder="Teacherid"
                type="number"
                onChange={handleChange}
              ></Input>
              {touched.teacherid && errors.teacherid? (
            <div className="error">{errors.teacherid}</div>
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
        <Button className="Back" color="primary" onClick={() => nav("/teacher")}>
          Back
        </Button>
      </Container>
    </div>
      )
    }}
      </Formik>
  );
}
