import React from 'react'
import { Element } from 'react-scroll'
import Box from '@mui/material/Box';
import './Skills.css'
import image from '../Image/coding.gif'
import { Progress } from 'reactstrap'
import './Skills.css'
function Skills() {
    return (
        <Element>
            <div className='Skills container-fluid' id="Skills">               
                <div className='row'>
                    <div className='col-lg-6 md-8 sm-10 xs-12 Skillsdetail'>
                        <h5 className='Skills_Title'>Skills</h5>
                        <h5>html</h5>
                        <Progress
                            className="my-3"
                            value={10} style={{ height: "5px" }}
                        />
                        <h5>CSS</h5>
                        <Progress
                            className="my-3"
                            color="success"
                            value="25" style={{ height: "5px" }}
                        />
                        <h5>JavaScript</h5>
                        <Progress
                            className="my-3 "
                            color="info"
                            value={50} style={{ height: "5px" }}
                        />
                        <h5>React</h5>
                        <Progress
                            className="my-3 "
                            color="warning"
                            value={75} style={{ height: "5px" }}
                        />
                        <h5>Angular</h5>
                        <Progress
                            className="my-3"
                            color="danger"
                            value="100" style={{ height: "5px" }}
                        />
                    </div>
                    <div className='Style_mid col-lg-1 md-1 sm-1 xs-1'>
                        <div class="v_circle_Skills "></div>
                        <div class="v_line_Skills "> </div>
                        <div class="v_circle_Skills "></div>
                    </div>
                    <div className='col-lg-4 md-6 sm-8 xs-10 Skillsimage_Container'>
                        <img src={image} alt="vengateshwaran" title='vengateshwaran' className="Skillsimage" />
                    </div>
                </div>

            </div>
        </Element>
    )
}

export default Skills