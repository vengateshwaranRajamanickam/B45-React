import { useEffect, useState } from 'react';
import Context from './Context';
import React from 'react';
//import { v4 as uuidv4 } from "uuid";
let initialValue = {
    name: "",
    rank: 0,
    studentid: 0,
    teacherdepartment:"",
    teachername:""
    
  };
export default function Provider(props) {
    const [UserData, setUserData] = useState([]);
    const [UserStudent, setUserStudent] = useState([]);
    const [UserTeacher, setUserTeacher] = useState([]);
    const [inputarray, setinputarray] = useState([]);
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
    // const createProduct = (product) => {
    //     setProductData([...productData, { ...product, id: uuidv4() }]);
    //   };     
    // function Deletedetail(id){
    //     let index =UserStudent.findIndex((value) => value.id ===id);
    //     let temp=(UserStudent.splice((index), 1))
    //     setinputarray([])
    // }
    // function TeacherDeletedetail(id){
    //     let index = UserTeacher.findIndex((value) => value.id ===id);
    //     let temp=(UserTeacher.splice((index), 1))
    //     setinputarray([])
    }
  function StudentCreatedetail(){
setUserStudent([...UserStudent,formData])
  }
//   function TeacherCreatedetail(){
// setUserTeacher([...UserTeacher,formData])
//   }
function handleChange (e) {
    if (e.target.type === "number") {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
    function StudentUpdatedetail(data){
        let index = UserStudent.findIndex((value) => value.id === data.id);
        let tempProd = UserStudent;
        tempProd[index] =data;
        setUserStudent([...tempProd]);
    }
  //   function TeacherUpdatedetail(data){
  //     let index = UserTeacher.findIndex((value) => value.id === data.id);
  //     let tempProd = UserTeacher;
  //     tempProd[index] =data;
  //     setUserTeacher([...tempProd]);
  // }
    function StudentShowdetail(id) {
        if(id>0){
            let index = UserStudent.findIndex((value) => value.id ===id);
            let tempProd =UserStudent[index];
            setinputarray([tempProd])
        }
        else{
            setinputarray([])
        }
    }
  //   function TeacherShowdetail(id) {
  //     if(id>0){
  //         let index =UserTeacher.findIndex((value) => value.id ===id);
  //         let tempProd =UserTeacher[index];
  //         setinputarray([tempProd])
  //     }
  //     else{
  //         setinputarray([])
  //     }
  // }
  // TeacherShowdetail,TeacherDeletedetail,TeacherUpdatedetail,TeacherCreatedetail
  return (
       
        <Context.Provider value={{UserTeacher,UserStudent,inputarray,StudentCreatedetail,StudentShowdetail,StudentUpdatedetail,handleChange}}>
            {props.children}
        </Context.Provider>
       
    )
    
