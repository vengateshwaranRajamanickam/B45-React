import logo from './logo.svg';
import css from './App.css';
import React from 'react'
import Student from './Student';
import Teacher from './Teacher'
import Provider from './Provider';
import Nav from './Nav';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
    <Provider>
      <BrowserRouter>
        <Nav>
        <Link to="/">Students</Link> 
        </Nav>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/Teacher" element={<Teacher/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
</div>
  )
}
