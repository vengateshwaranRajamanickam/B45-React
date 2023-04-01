import React from 'react';
import {Button,InputGroup,Input} from 'reactstrap'
import {useState} from 'react'
//import App from './App'
export default function Todotextbox({arrayinput,bvalue}) {
    const [Todoarray, setTodoarray]=useState("")
    function Todoarrayinput(event)
    {
        setTodoarray(event.target.value);
    }
  return (
    <div>
      <h3 className='Title'>TodoList</h3><hr />
      <InputGroup>
        <Input type="text" value={Todoarray} onChange={Todoarrayinput}></Input>
        <Button onClick={() => { arrayinput(Todoarray); setTodoarray("") }}>Make List</Button>
      </InputGroup>
    </div>
  )
}
