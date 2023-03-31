import React from 'react';
import {Button,InputGroup,Input} from 'reactstrap'
import {useState} from 'react'
//import App from './App'
export default function Todotextbox({arrayinput}) {
    const [Todoarray,setTodoarray]=useState("")
    function Todoarrayinput(event)
    {
        setTodoarray(event.target.value);
      
    }
   return (
        <div>
       <h3>TodoList</h3><hr/>
        <InputGroup>
          <Input  type="text" value={Todoarray}  onChange={Todoarrayinput}/>
          <Button color="danger" onClick={()=>{arrayinput(Todoarray);setTodoarray("")}}>
            To the Right!
          </Button>
        </InputGroup>
      </div>
    )
}
