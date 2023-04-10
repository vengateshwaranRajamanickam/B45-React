import React, { useContext,useRef,useEffect} from "react";
import {
  Row,
  Col,
  Container,
  Label,
  Form,
  FormGroup,
  Input,
  FormText,
  Button
} from "reactstrap";
import Context from "../Context";
import { useNavigate } from "react-router-dom";
export default function TeacherRegister() {
  const context = useContext(Context);
  const nav = useNavigate();
  const inputref=useRef();
  useEffect(()=>{
    inputref.current.focus()
  },[])
  return (
    <div className="registerteacherpage">
      <Container>
        <Form>
          <FormGroup row>
            <Label for="Teachername" sm={2}>
              Teachername
            </Label>
            <Col sm={10}>
              <Input
                id="teachername"
                name="teachername"
                placeholder="Teachername"
                type="text"
                onChange={context.handleChange}
                innerRef={inputref}
                required
              ></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Teacher department
            </Label>
            <Col sm={10}>
              <Input
                id="teacherdepartment"
                name="teacherdepartment"
                placeholder="Teacherdepartment"
                type="text"
                onChange={context.handleChange}
                required
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Teacher department
            </Label>
            <Col sm={10}>
              <Input
                id="teacherdid"
                name="teacherid"
                placeholder="Teacherid"
                type="number"
                onChange={context.handleChange}
                required
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={10}>
              <Button color="info" onClick={context.TeacherCreatedetail}>
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
  );
}
