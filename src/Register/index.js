import React, { useContext } from "react";
import { Row,Col,Container,Label,Form,FormGroup,Input,FormText,Button  } from 'reactstrap';
import Context from '../Context';
import { useNavigate } from 'react-router-dom'
export default function Student(){
    const context=useContext (Context);
    const nav=useNavigate();
    return (
   
 <Container>       
      <Form>
      
 
   
  <FormGroup row>
  <Label
    for="Firstname"
    sm={2}
  >
    Firstname
  </Label>
  <Col sm={10}>
    <Input
      id="firstname"
      name="firstname"
      placeholder="Firstname"
      type="firstname"
      //onChange={}
      value=""
      />{
  }
  </Col>
</FormGroup>
<FormGroup row>
  <Label
    for="Lastname"
    sm={2}
  >
    Lastname
  </Label>
  <Col sm={10}>
    <Input
      id="lastname"
      name="lastname"
      placeholder="Lastname"
      type="lastname"
     // onChange={}
     // value={}
      ></Input>
  </Col>
</FormGroup>

<FormGroup row>
  <Label
    for="exampleText"
    sm={2}
  >
  Email id
  </Label>
  <Col sm={10}>
  <Input
      id="emailid"
      name="emailid"
      placeholder="Email id"
      type="emailid"
      //onChange={handleChange}
      //value={user.emailid}
      ></Input>
  </Col>
  </FormGroup>
<FormGroup row>
<Label
    for="exampleText"
    sm={2}
  >
  Phone 
  </Label>
  <Col sm={10}>
  <Input
      id="phonenumber"
      name="phonenumber"
      placeholder="Phonenumber"
      type="phonenumber"
    //  onChange={handleChange}
     // value={user.phonenumber}
      ></Input>
  </Col>
</FormGroup>
<FormGroup>
  <Col sm={10}>
    <Button color="info" >Submit
   </Button>
  </Col>
</FormGroup>
</Form>
<Button className='Back' color="primary" onClick={() => nav("/")}>Back</Button>
</Container>

)

}