import React from 'react'
import {Link} from 'react-scroll'
import  './Header.css'
const Header = () => {
  return (
    <>
    <section className='Header'>
    <div className='Header_left'>
      Full Stack <span>MERN</span> developer
    </div>
    <div className='Header_right'>
    <Link to="About"   className='Header_right_link'>About</Link>
    <Link to="Skills"   className='Header_right_link'>Skills</Link>
    <Link to="Experience"  className='Header_right_link'>Experience</Link>
    <Link to="Education"  className='Header_right_link'>Education</Link>
    <Link to="Certification" className='Header_right_link'>Certification</Link>
    <Link to="Contact me" className='Header_right_link'>Contact me</Link>
    </div>
    </section>
    </>
  )
}

export default Header