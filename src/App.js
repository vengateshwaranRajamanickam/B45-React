import logo from './logo.svg';
import './App.css';
import {Input, Button, Container, InputGroup } from 'reactstrap';
import {useState} from 'react'
import ConformTodolist from './ConformTodolist';

export default function App() {
  const [Todolist,setTodolist]=useState([]);
  const Getvalue=(e)=>{
  setTodolist([...Todolist],e.target.value);
  }
  console.log(Getvalue)
  return (
      <>
      <Container>
        <InputGroup>
        <Input onClick={Getvalue}/>
        <Todo
        <ConformTodolist/>
        <Button>Add Todolist</Button>
        </InputGroup>
      </Container>
      </>
  );
}


