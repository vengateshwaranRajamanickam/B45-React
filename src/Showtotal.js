import React from "react";
import App from './App'
let temp=0;
export default function Showtot(parameter){
    temp+=Number(parameter);
    document.getElementById("Total").innerHTML=temp;
}
