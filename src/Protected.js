import React, { useContext } from "react";
import {Navigate} from "react-router-dom";
import { Usercontext } from "./Usercontext";
export default function Protected({children}){
    const {valid}=useContext(Usercontext);
    const nav=Navigate();
     if(valid===false)
        return nav("/")
        else
        return children

}