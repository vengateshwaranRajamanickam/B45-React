import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import Reducer from './Reducer';
import { Calc } from './Context';
import Displaycalc from './Displaycalc'

function App() {
  let initialvalue = {prevdata:"", nextdata:[]};
  const [state, dispatch] = useReducer(Reducer, initialvalue)
  return (
    <Calc.Provider value={{state, dispatch}}>
      <Displaycalc />
      <p>jlsfdfoisfu</p>
    </Calc.Provider>

  );
}

export default App;
