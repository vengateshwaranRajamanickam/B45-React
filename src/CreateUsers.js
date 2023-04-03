import React from 'react'
import {Form,FormGroup,Label,Input,FormText,Button,Container,Col} from 'reactstrap'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
export default function CreateUsers(){
  const nav = useNavigate();
  const [user, setUser] = useState({});
        <div  className='EditUser'>
    <Container>       
        <Form>
        <FormGroup row>
    <Label
      for="exampleFile"
      sm={2}
    >
      Profile pic
    </Label>
    <Col sm={10}>
      <Input
        id="exampleFile"
        name="file"
        type="file"accept="image/jpeg"
      />
      <FormText>
        Upload only .jpg
      </FormText>
    </Col>
  </FormGroup>
        <FormGroup row>
    <Label
      for="Firstname"
      sm={2}
    >
      Firstname
    </Label>
    <Col sm={10}>
      <Input
        id="Firstname"
        name="firstname"
        placeholder="Firstname"
        type="firstname"
        value=""
        ></Input>{
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
        id="Lastname"
        name="Lastname"
        placeholder="Lastname"
        type="Lastname"
        value=""
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
        id="Emailid"
        name="emailid"
        placeholder="Emailid"
        type="Emailid"
        value=""
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
        id="Phonenumber"
        name="phonenumber"
        placeholder="Phonenumber"
        type="Phonenumber"
        value=""
        ></Input>
    </Col>
  </FormGroup>
  <FormGroup>
    <Col sm={10}>
      <Button>
        Submit
      </Button>
    </Col>
  </FormGroup>
</Form>
</Container>
</div>
  )

}