import React from 'react'
import image from '../Image/pop.png'
import './About.css'
import { Element } from 'react-scroll'
function About() {
    return (
        <Element>
            <div className='row about' id="About">
                <div className='cardimage col-lg-4 md-6 sm-10 xs-12 aboutimage'>
                    <img src={image} alt="vengateshwaran" title='vengateshwaran' />
                </div>
                <div className='col-lg-6 md-8 sm-10 xs-12 aboutdetail'>
                    <div class="animation">
                        <p >Mr.vengatesh</p>
                        <p >Full Stack Mern Developer</p>
                        <p>Developed and maintained scalable and efficient web applications using
React.js, Node.js, and MongoDB</p>
                    </div>
                    <button className='cv_download_button'>Download Cv</button>
                </div>
            </div>
        </Element>
    )
}

export default About