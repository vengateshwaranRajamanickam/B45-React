import logo from './logo.svg';
import './App.css';
import List from './List';
import Viewlist from './Viewlist'
import { useReducer } from 'react';
import { TodoContext } from './Context';
import reducer  from './Reducer'
export default function App({input}){
  let initialvalue={
    todo:[],
    inprogress:[],
    completed:[]
  }
  const [state,dispatch]=useReducer(reducer ,initialvalue)
   return(
      <TodoContext.Provider value={{state,dispatch}}>
        <List/>
        <Viewlist/>
      </TodoContext.Provider>
)
}

