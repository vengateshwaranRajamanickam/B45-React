import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Student from "./Student";
import Teacher from "./Teacher";
import Provider from "./Provider";
import Register from "./Register";
import Nav from "./Nav";
import Footer from "./Footer";
import Registerteacher from "./Registerteacher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <Provider> 
        <BrowserRouter>
          <Nav />
         
          <Routes>
            <Route path="/" element={<Student />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registerteacher" element={<Registerteacher />} />
          </Routes>

          <Footer/>
    
        </BrowserRouter>
        </Provider>
    </div>
  );
}
