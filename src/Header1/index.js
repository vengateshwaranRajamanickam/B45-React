import React from 'react'
import {Link} from 'react-scroll'
import  './Header1.css'
const Header = () => {
  return (
    <>
    <section className='Header'>
    <div className='Header_left'>
      Full Stack <span>MERN</span> developer
    </div>
    <div className='Header_right'>
    <Link to="About" smooth={true} duration={200} className='Header_right_link'>About</Link>
    <Link to="Skills" smooth={true} duration={200} className='Header_right_link'>Skills</Link>
    <Link to="Education" duration={500} className='Header_right_link'>Education</Link>
    <Link to="Experience" duration={500} className='Header_right_link'>Experience</Link>
    <Link to="Certification" className='Header_right_link'>Certification</Link>
    <Link to="Contact me" className='Header_right_link'>Contact me</Link>
    </div>
    </section>
    </>
  )
}

export default Header