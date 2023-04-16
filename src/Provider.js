import { useEffect, useState } from "react";
import Context from "./Context";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default function Provider(props) {
  const [inputarray, setinputarray] = useState([]);
  const [UserStudent, setUserStudent] = useState([]);
  const [UserTeacher, setUserTeacher] = useState([]);
  useEffect(() => {
    axios("https://640f08d74ed25579dc43acce.mockapi.io/amazon")
      .then((data) => {
        let tempstudent=data.data.map(person => ({studentid: person.studentid, name: person.name,rank:person.rank }))
        let tempteacher=data.data.map(person => ({teacherid:person.teacherid,teachername: person.teachername, teacherdepartment: person.teacherdepartment}))
        tempstudent=tempstudent.map(val=>val=({...val,id:uuidv4()}))
        tempteacher= tempteacher.map(val=>val=({...val,id:uuidv4()}))
        setUserStudent(tempstudent);
        setUserTeacher(tempteacher);
      });
  }, []);
  function StudentDeletedetail(id) {
    let index = UserStudent.findIndex((value) => value.id === id);
    let temp = UserStudent.splice(index, 1);
    setinputarray([]);
  }
  function TeacherDeletedetail(id) {
    let index = UserTeacher.findIndex((value) => value.id === id);
    let temp = UserTeacher.splice(index, 1);
    setinputarray([]);
  }
  function StudentCreatedetail(value) {
    setUserStudent([...UserStudent, value]);
    return  toast.success("Accepted")     
  }
  function TeacherCreatedetail(value) {
    setUserTeacher([...UserTeacher, value]);
    return  toast.success("Accepted")  
  }


  function StudentUpdatedetail(data) {
    let index = UserStudent.findIndex((value) => value.id === data.id);
    let tempProd = UserStudent;
    tempProd[index] = data;
    setUserStudent([...tempProd]);
  }
  function TeacherUpdatedetail(data) {
    let index = UserTeacher.findIndex((value) => value.id === data.id);
    let tempProd = UserTeacher;
    tempProd[index] = data;
    setUserTeacher([...tempProd]);
  }
  function StudentShowdetail(id) {
   if (id===0){
    setinputarray([]);
   }
   else{
      let index = UserStudent.findIndex((value) => value.id === id);
      let tempProd = UserStudent[index];
      setinputarray([tempProd]);
    }
  }
  function TeacherShowdetail(id) {
    if (id===0) {
      setinputarray([]);
    } else {
      let index = UserTeacher.findIndex((value) => value.id === id);
      let tempProd = UserTeacher[index];
      setinputarray([tempProd]);
    }
  }
  function closepop(){
    let ppop=document.getElementById("pop")
      ppop.classList.remove("openpop")
  }
  return (
    <Context.Provider
      value={{
        closepop,
        TeacherShowdetail,
        TeacherDeletedetail,
        TeacherUpdatedetail,
        TeacherCreatedetail,
        UserTeacher,
        UserStudent,
        inputarray,
        StudentDeletedetail,
        StudentCreatedetail,
        StudentShowdetail,
        StudentUpdatedetail,
        
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

