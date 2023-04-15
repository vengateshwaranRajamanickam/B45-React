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
export default function Register() {
const context = useContext(Context);
  const nav = useNavigate();
   const inputref=useRef();
  useEffect(()=>{
    inputref.current.focus()
  },[])
  return (
    <div className="registerpage mt-5">
      <Container>
        <Form>
          <FormGroup row>
            <Label for="Name" sm={2}>
             <h5> Name</h5>
            </Label>
            <Col sm={10}>
              <Input
                id="name"
                name="name"
                placeholder="Name"
                type="text" autofocus
                onChange={context.handleChange}
                required
               innerRef={inputref}
              >
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Student id" sm={2}>
            <h5>  Student id  </h5>  
            </Label>
            <Col sm={10}>
              <Input
                id="student id"
                name="studentid"
                placeholder="Student id"
                type="numberic"
                onChange={context.handleChange}
                required
              ></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={2}>
             <h5>   Rank </h5>
            </Label>
            <Col sm={10}>
              <Input
                id="rank"
                name="rank"
                placeholder="Rank"
                type="numberic"
                onChange={context.handleChange}
                required
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={10}>
              <Button color="info" onClick={context.StudentCreatedetail}>
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
  );
}
