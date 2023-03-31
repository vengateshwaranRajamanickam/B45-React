import React from "react";
import {useState} from 'react'
import Buttondec from './Buttondec'
import Showcount from "./Showcount";
//import Product from './Product';
import response from './input.json';
import Test from './test'
import css from './App.css';



export default function Count() {
    const [count,setcount]=useState(0)
    const [cart,setcart]=useState(response);
    var [cartprice,setcartprice]=useState(0);
    function reset(countrest,cartpriccerest){
        setcount(countrest)
        setcartprice(cartpriccerest)
        document.getElementById("Total").innerHTML=cartprice;
    }
    function incrementCount(price,id){
        Showtot(price);
        let index = response.findIndex(obj => obj.id === id)
        let tempdata = response;
        tempdata[index].isvisible = false;
        setcart([...tempdata]);
        if(count<100)
    setcount(count+1)
    }
    function decrementCount(price,id){
        Showtot(-Math.abs(price));
        let index = response.findIndex(obj => obj.id === id)
        let tempdata = response;
        tempdata[index].isvisible = true;
        setcart([...tempdata]);
        if(count>0)
    setcount(count-1)
    }
    function checkprice(a,id){
        return  document.getElementById(`${id}`).value=a;
    }
    function Showtot(parameter){
        setcartprice(cartprice+=Number(parameter));
        document.getElementById("Total").innerHTML=cartprice;
    }
   
    return (
<div >
    <Showcount parameter={count} />
    <h2 class="Total"><i class="fa-solid fa-money-bills"></i></h2><h2 id="Total" class="Totalinner">0</h2>
    <Buttondec  reset={reset}/>
    <div class="App">
        {cart.map((res,index) => ( 
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
                            tool={res.isvisible}
                           />
                          
                           ))}                  
        </div>
</div>
    )
}
