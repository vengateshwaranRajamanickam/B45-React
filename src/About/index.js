import React from 'react'
import image from '../Image/pop.png'
import './TopContainer.css'
import { Element } from 'react-scroll'
function About() {
    return (
        <Element>
            <div className='row topContainer ' id="About">
                <div className='cardimage col-lg-4 col-md-6 col-xs-6 topContainerimage'>
                    <img src={image} alt="vengateshwaran" title='vengateshwaran' />
                </div>

                <div className='col-lg-6 col-md-12 col-xs-12 topContainerdetail'>
                    <div class="animation">
                        <p >Mr.vengatesh</p>
                        <p >Full Stack Mern Developer</p>
                    </div>
                    <button className='topContent_button'>Download Cv</button>
                    <a href='www.google.com' alt="fs">dfds</a>
                </div>
            </div>
        </Element>
    )
}

export default About