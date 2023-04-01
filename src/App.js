
import Todotextbox from './Todotextbox'
import React from 'react'
import Itemlist from './Itemlist'
import {useState} from 'react'
//import Completelist from './completelist'
import css from './App.css'
import { v4 as uuidv4 } from "uuid"


export default function App() {
    const [inputarray,setinputarray]=useState([])

    function arrayinput(arr) {
        let temptodo = { id: uuidv4(), arr, isCompleted:false }
        setinputarray([...inputarray, temptodo])
        console.log(inputarray)
    }
    function AddList(id) {
        let index = inputarray.findIndex((value) => value.id === id);
        let tempTodos = inputarray;
        tempTodos[index].isCompleted = true;
        setinputarray([...tempTodos])
    }
    function RemoveList(id) {
        let index = inputarray.findIndex((value) => value.id === id);
        let tempTodos = inputarray;
    tempTodos=tempTodos.splice(index,1)
        setinputarray([...tempTodos])
    }
    return (
        <>
            <Todotextbox arrayinput={arrayinput} />
            {inputarray.length > 0 && (
           <Itemlist para={inputarray} add={AddList} remove={RemoveList} />
        )}
            {/* <completelist input={finalTodo}/>       */}

        </>
    )
}
