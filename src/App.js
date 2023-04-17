import logo from './logo.svg';
import './App.css';
import React from 'react'
import CVHeader from './Header1'
import About from './About'
import Skills from './Skills'
import Certification from './Certification';
// import Education from './Education'
 import Experience from './Experience'
// import Footer from './Footer'
function App() {
  return (
    <>
      <CVHeader />
      <About />
      <Skills />
      <Certification />
      < Experience/>
    </>
  );
}

export default App;
