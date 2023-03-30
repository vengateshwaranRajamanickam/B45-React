import React from "react";
import {useState} from 'react'
import Buttondec from './Buttondec'
import Showcount from "./Showcount";
//import Product from './Product';
import response from './input.json';
import Test from './test'
import css from './App.css';
import Showtot from "./Showtotal";


export default function Count() {
    const [count,setcount]=useState(0)
    
    function reset(){
        setcount(0)
    }
    function incrementCount(price){
    Showtot(price)
        if(count<100)
    setcount(count+1)
    }
    function decrementCount(){
        if(count>0)
    setcount(count-1)
    }
    function checkprice(a,id){
        return  document.getElementById(`${id}`).value=a;
    }
   
    return (
<div >
    <Showcount parameter={count} />
    <h3 class="Total">Totalprice:</h3><h3 id="Total" class="Total1" >0</h3>
    <Buttondec incpara={incrementCount} decpara={decrementCount} reset={reset}/>
    <div class="App ">
        {response.map((res,index) => ( 
                       <Test
                           key={index}
                           title={res.product}
                           name={res.name}
                           id={res.id}
                           description={res.description}
                           incpara={incrementCount}
                           decpara={decrementCount}
                           price={res.price}
                           pricecallback={checkprice}
                       />
        ))}
        </div>
</div>
    )
}
