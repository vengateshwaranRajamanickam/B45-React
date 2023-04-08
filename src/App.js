import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import Reducer from './Reducer';
import { Calc } from './Context';
import Displaycalc from './Displaycalc'
import { Container } from 'reactstrap';

function App() {
  let initialvalue = {prevdata:"", nextdata:"",temp:""};
  const [state, dispatch] = useReducer(Reducer, initialvalue)
  return (
    
    <Calc.Provider value={{state, dispatch}}>
      
      <Displaycalc />
     
      </Calc.Provider>
    
  );
}

export default App;
