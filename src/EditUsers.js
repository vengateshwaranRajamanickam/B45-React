import React from 'react'
import {Form,FormGroup,Label,Input,FormText,Button,Container,Col} from 'reactstrap'
import { useState,useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export default function EditUsers({data}){
  const nav=useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    if (e.target.type === "number") {
      setUser({ ...user, [e.target.name]: parseInt(e.target.value) });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  useEffect(() => {
    if (id) {
        
      fetch("https://640f08d74ed25579dc43acce.mockapi.io/users/" + id)
        .then((data) => data.json())
        .then((res) => setUser(res));
    }
  }, [id]);
  
  const handleSubmit = () => {
    
      fetch("https://640f08d74ed25579dc43acce.mockapi.io/users/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
    
  };
    return(
        <div  className='EditUser Background'>
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
        onChange={handleChange}
        value={user.firstname}
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
        onChange={handleChange}
        value={user.lastname}
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
        onChange={handleChange}
        value={user.emailid}
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
        onChange={handleChange}
        value={user.phonenumber}
        ></Input>
    </Col>
  </FormGroup>
  <FormGroup>
    <Col sm={10}>
      <Button color="info" onClick={handleSubmit}>Submit
     </Button>
    </Col>
  </FormGroup>
</Form>
<Button className='Back' color="primary" onClick={() => nav("/")}>Back</Button>
</Container>
</div>
  )

}