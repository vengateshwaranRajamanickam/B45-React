import React, { useContext } from "react";
import { useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from "./Context";
import {Row,Col,Input, Button, Container, InputGroup } from 'reactstrap';
import { ADD_TODO } from "./Action.type";
export default function App() {
  const {dispatch}=useContext(TodoContext)
  const inputref=useRef();
  function Getvalue(e){
    if (inputref.current.value) {
    let Todolist={id:uuidv4(),value:inputref.current.value}
  dispatch({
    type:ADD_TODO,
    payload:Todolist
  })
  inputref.current.value="";
  }
}
  //let final=Todolist.map((value)=>value={...value,id:uuidv4(),list:inputref.current.value})
  return (
      <>
      <Container className='TodoList'>
        <h3 className="listtitle">Create Todolist</h3>
        <InputGroup>
        {/* <input ref={inputref}/> */}
        <Input innerRef={inputref}/>
        <Button className="addbutton" color="info" onClick={Getvalue}>Add Todolist</Button> 
        </InputGroup>
        <Container className='Listcontainer'>
        <Row>
        <Col xs={12} md={6}>
        </Col>
        <Col xs={12} md={6}> 
        </Col>
        </Row>
        </Container>
        
      </Container>
      </>
  );
}
