import logo from './logo.svg';
import './App.css';
import List from './List';
import Viewlist from './Viewlist'
import { useReducer } from 'react';
import { TodoContext } from './Context';
import Reducer from './Reducer'
export default function App({input}){
  let initialvalue={
    todo:[],
    inprogress:[],
    completed:[]
  }
  const [state,dispatch]=useReducer(Reducer,initialvalue)
   return(
      <TodoContext.Provider value={{state,dispatch}}>
        <List/>
        <Viewlist/>
      </TodoContext.Provider>
)
}

