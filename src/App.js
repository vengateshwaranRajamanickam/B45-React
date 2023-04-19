import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Certification from './Certification';
import Education from './Education'
 import Experience from './Experience'
import Footer from './Footer'
function App() {
  return (
    < div className='App'>
      <Header />
      <About />
      <Skills />
      <Certification />
      < Experience/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
