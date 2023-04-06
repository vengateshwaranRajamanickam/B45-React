import React, { useContext } from "react";
import { Row,Col,Container,Label,Form,FormGroup,Input,FormText,Button  } from 'reactstrap';
import Context from '../Context';
import { useNavigate } from 'react-router-dom'
export default function Register(){
    const context=useContext (Context);
    const nav=useNavigate();
    return (
   <div  className="registerpage">
 <Container>       
      <Form>
      
 
   
  <FormGroup row>
  <Label
    for="Name"
    sm={2}
  >
    Name
  </Label>
  <Col sm={10}>
    <Input
      id="name"
      name="name"
      placeholder="Name"
      type="text"
      onChange={context.handleChange}
      //value=""
      />{
  }
  </Col>
</FormGroup>
<FormGroup row>
  <Label
    for="Student id"
    sm={2}
  >
    Student id
  </Label>
  <Col sm={10}>
    <Input
      id="student id"
      name="student id"
      placeholder="Student id"
      type="number"
      onChange={context.handleChange}
     // value={}
      ></Input>
  </Col>
</FormGroup>

<FormGroup row>
<Label
    for="exampleText"
    sm={2}
  >
 Rank 
  </Label>
  <Col sm={10}>
  <Input
      id="rank"
      name="rank"
      placeholder="Rank"
      type="number"
    onChange={context.handleChange}
     //value={user.phonenumber}
      ></Input>
  </Col>
</FormGroup>
<FormGroup>
  <Col sm={10}>
    <Button color="info" onClick={context.Createdetail}>Submit
   </Button>
  </Col>
</FormGroup>
</Form>
<Button className='Back' color="primary" onClick={() => nav("/")}>Back</Button>
</Container>
</div>

)

}