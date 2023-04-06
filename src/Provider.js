import { useEffect, useState } from 'react';
import Context from './Context';
import React from 'react';
//import { v4 as uuidv4 } from "uuid";
let initialValue = {
    name: "",
    rank: 0,
    studentid: 0,
    
  };
export default function Provider(props) {
    const [UserData, setUserData] = useState([]);
    const [inputarray, setinputarray] = useState([]);
    const [UserStudent, setUserStudent] = useState([]);
    const [UserTeacher, setUserTeacher] = useState([]);
    const [formData, setFormData] = useState(initialValue);
    useEffect(() => {
        fetch('https://640f08d74ed25579dc43acce.mockapi.io/amazon').then(res =>res.json()).then(data=>setUserData(data))
    }, []);
    useEffect(() => {
        let temp=UserData.filter((value)=>value.studentid&&value.name&&value.rank)
        setUserStudent(temp)
        let temp1=UserData.filter((value)=>value.teachername&&value.teacherdepartment)
        setUserTeacher(temp1)
     }, []);
    function Deletedetail(id){
        let index = UserData.findIndex((value) => value.id ===id);
        let temp=(UserData.splice((index), 1))
        setinputarray([])
    }
  function Createdetail(){
        setUserData([...UserData,formData])
  }
function handleChange (e) {
    if (e.target.type === "number") {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
    function Updatedetail(data){
        let index = UserData.findIndex((value) => value.id === data.id);
        let tempProd = UserData;
        tempProd[index] =data;
        setUserData([...tempProd]);
    }
    function Showdetail(id) {
        if(id>0){
            let index = UserData.findIndex((value) => value.id ===id);
            let tempProd =UserData[index];
            setinputarray([tempProd])
        }
        else{
            setinputarray([])
        }
    }
    return (
       
        <Context.Provider value={{ Createdetail,UserData, inputarray,handleChange, Showdetail,Deletedetail,Updatedetail}}>
            {props.children}
        </Context.Provider>
       
    )
    }