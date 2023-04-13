import { v4 as uuidv4 } from "uuid";
import {LibraryContext} from './Context'
import { useState,useEffect} from 'react';
import axios from 'axios'
let tempbook;
export default function Provider(props) {
  const [Bookarray, setBookarray] = useState([]);
  const [Showdetail, setShowdetail] = useState([]);
  useEffect(() => {
    axios("https://63f4cd7a2213ed989c4ae285.mockapi.io/ap/v1/Library")
      .then((data) => {
        tempbook = data.data.map(book => ({ ...book, Bookid: uuidv4() }))
        setBookarray(tempbook);
      })
  }, []);
  function DeleteBook(Bookid) {
    let index = Bookarray.findIndex((value) => value.Bookid === Bookid);
    let temp = Bookarray.splice(index, 1);
     setShowdetail([]);
  }
function SearchBook(name){
let temp=Bookarray.filter(({BookName},index)=>BookName.toLowerCase().includes(name.toLowerCase()))
setBookarray([...temp]);
if(name==""){
  setBookarray(tempbook);
}

}

  function BookShow(Bookid) {
    if (Bookid===0) {
       setShowdetail([]);
    } else {
      let temp = Bookarray.findIndex((value) => value.Bookid === Bookid);
      let tempProd = Bookarray[temp];
       setShowdetail([tempProd]);
    }
  }
  function CreateBook(value,id){
    if(id){
      let index = Bookarray.findIndex((value) => value.id === id);
      Bookarray[index]=value;
      setBookarray(Bookarray);
      setShowdetail([]);
    }
    setBookarray([...Bookarray,value])
    setShowdetail([]);
  }
  return (
    <LibraryContext.Provider
      value={{
       DeleteBook,BookShow,SearchBook,
        Bookarray,Showdetail,CreateBook}}>
      {props.children}
    </LibraryContext.Provider>
  );
}

