import React from 'react'
import { Element } from 'react-scroll'
import {Container} from 'reactstrap'
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'
function Footer() {
  return (
    <Element>
      <h1 className='Footer_Contact'>Contact</h1>
      <Container className="Footer" id="Contact me">
<div className='Footer_Container'>
  <p>E-mail:<span>vengateshwaran.1994@gmail.com</span></p>
  <p>Mobile:<span>+91 7397350312</span></p>
<div>
  <a href='https://linkedin.com/in/vengateshwaran-rajamanickam' className='Footer_anchor'>
    <IconButton><LinkedInIcon/></IconButton> LinkedIn
  </a>
  <a href='https://linkedin.com/in/vengateshwaran-rajamanickam' className='Footer_anchor'>
    <IconButton><InstagramIcon/></IconButton> Instagram
  </a>
  <a href='https://github.com/vengateshwaranRajamanickam/B45-React.git' className='Footer_anchor'>
    <IconButton><GitHubIcon/></IconButton>  GitHub
  </a>
</div>
</div>
      </Container>
    </Element>
  )
}

export default Footer