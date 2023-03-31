
import Todotextbox from './Todotextbox'
import React from 'react'
import Itemlist from './Itemlist'
import {useState} from 'react'


export default function App() {
    const [inputarray,setinputarray]=useState([])
    function arrayinput(arr)
    {
        setinputarray([...inputarray,arr])
    }
   return (
         <>
        <Todotextbox arrayinput={arrayinput}/>
        <Itemlist Itemlist={inputarray}/>
        </>
    )
}
