import { v4 as uuidv4 } from "uuid";
import {LibraryContext} from './Context'
import { useState,useEffect} from 'react';
import axios from 'axios'

export default function Provider(props) {
  const [Bookarray, setBookarray] = useState([]);
  const [Showdetail, setShowdetail] = useState([]);
  useEffect(() => {
    axios("https://63f4cd7a2213ed989c4ae285.mockapi.io/ap/v1/Library")
      .then((data) => {
        let tempbook = data.data.map(book => ({ ...book, id: uuidv4() }))
        setBookarray(tempbook);
      })
  }, []);
  function DeleteBook(id) {
    let index = Bookarray.findIndex((value) => value.id === id);
    let temp = Bookarray.splice(index, 1);
     setShowdetail([]);
  }
  function BookShow(id) {
    if (id===0) {
       setShowdetail([]);
    } else {
      let index = Bookarray.findIndex((value) => value.id === id);
      let tempProd = Bookarray[index];
       setShowdetail([tempProd]);
    }
  }
  function CreateBook(value){
    setBookarray([...Bookarray,value])
  }
  return (
    <LibraryContext.Provider
      value={{
       DeleteBook,BookShow,
        Bookarray,Showdetail,CreateBook}}>
      {props.children}
    </LibraryContext.Provider>
  );
}

