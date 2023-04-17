import React, { useState } from 'react'
import { Element } from 'react-scroll'
import { CardBody, CardTitle, CardLink, CardText, Card, List, Col, Row } from 'reactstrap'
import './Certification.css'
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import studentteacher from '../Image/student teacher management.jpg'
function Certification() {
  const [ios, setios] = useState(true);
  const [showcard, setshowcard] = useState(true);
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,

      }),
    },
  }));
  return (
    <Element>
      <div className='Certification' id="Certification">
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked={ios ? true : ""} onChange={() => setios(!ios)} />}
          label={ios ? "Project" : "Certification"}
        />{console.log(ios)}
        {
          ios ?
            (
              <div className='grid-container'>
                <Card className='Card' onMouseEnter={() => setshowcard(false)} onMouseLeave={() => setshowcard(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5">
                    Student Teacher Management
                  </CardTitle>
                  {showcard ? (<img className='image'
                    alt="Card cap"
                    src={studentteacher}
                    accept="image/.jpg"
                  />) : (<CardBody>
                    <CardText className='CardText'>
                      <List>
                        <li className='darkblue'><span className='Card_List'>html</span></li>
                        <li className='success'><span className='Card_List'>CSS</span></li>
                        <li className='blue'><span className='Card_List'>JavaScript</span></li>
                        <li className='yellow'><span className='Card_List'>React</span></li>
                      </List>
                    </CardText>
                    <CardLink href="https://relaxed-bublanina-73046d.netlify.app/">
                      Card Link
                    </CardLink>
                  </CardBody>)}
                  </Card>
                <Card className='Card' onMouseEnter={() => setshowcard(false)} onMouseLeave={() => setshowcard(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5">
                    Student Teacher Management
                  </CardTitle>
                  {showcard ? (<img className='image'
                    alt="Card cap"
                    src={studentteacher}
                    accept="image/.jpg"
                  />) : (<CardBody>
                    <CardText className='CardText'>
                      <List>
                        <li className='darkblue'><span className='Card_List'>html</span></li>
                        <li className='success'><span className='Card_List'>CSS</span></li>
                        <li className='blue'><span className='Card_List'>JavaScript</span></li>
                        <li className='yellow'><span className='Card_List'>React</span></li>
                      </List>
                    </CardText>
                    <CardLink href="https://relaxed-bublanina-73046d.netlify.app/">
                      Card Link
                    </CardLink>
                  </CardBody>)}
                  </Card>
                <Card className='Card' onMouseEnter={() => setshowcard(false)} onMouseLeave={() => setshowcard(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5">
                    Student Teacher Management
                  </CardTitle>
                  {showcard ? (<img className='image'
                    alt="Card cap"
                    src={studentteacher}
                    accept="image/.jpg"
                  />) : (<CardBody>
                    <CardText className='CardText'>
                      <List>
                        <li className='darkblue'><span className='Card_List'>html</span></li>
                        <li className='success'><span className='Card_List'>CSS</span></li>
                        <li className='blue'><span className='Card_List'>JavaScript</span></li>
                        <li className='yellow'><span className='Card_List'>React</span></li>
                      </List>
                    </CardText>
                    <CardLink href="https://relaxed-bublanina-73046d.netlify.app/">
                      Card Link
                    </CardLink>
                  </CardBody>)}
                  </Card>
                  <Card className='Card' onMouseEnter={() => setshowcard(false)} onMouseLeave={() => setshowcard(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5">
                    Student Teacher Management
                  </CardTitle>
                  {showcard ? (<img className='image'
                    alt="Card cap"
                    src={studentteacher}
                    accept="image/.jpg"
                  />) : (<CardBody>
                    <CardText className='CardText'>
                      <List>
                        <li className='darkblue'><span className='Card_List'>html</span></li>
                        <li className='success'><span className='Card_List'>CSS</span></li>
                        <li className='blue'><span className='Card_List'>JavaScript</span></li>
                        <li className='yellow'><span className='Card_List'>React</span></li>
                      </List>
                    </CardText>
                    <CardLink href="https://relaxed-bublanina-73046d.netlify.app/">
                      Card Link
                    </CardLink>
                  </CardBody>)}
                   </Card>
                <Card className='Card' onMouseEnter={() => setshowcard(false)} onMouseLeave={() => setshowcard(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5">
                    Student Teacher Management
                  </CardTitle>
                  {showcard ? (<img className='image'
                    alt="Card cap"
                    src={studentteacher}
                    accept="image/.jpg"
                  />) : (<CardBody>
                    <CardText className='CardText'>
                      <List>
                        <li className='darkblue'><span className='Card_List'>html</span></li>
                        <li className='success'><span className='Card_List'>CSS</span></li>
                        <li className='blue'><span className='Card_List'>JavaScript</span></li>
                        <li className='yellow'><span className='Card_List'>React</span></li>
                      </List>
                    </CardText>
                    <CardLink href="https://relaxed-bublanina-73046d.netlify.app/">
                      Card Link
                    </CardLink>
                  </CardBody>)}
                 </Card>
              </div>) : (
              <div className='grid-container'>
                <Card className='Card' onMouseEnter={() => setshowcard(false)} onMouseLeave={() => setshowcard(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5">
                    Student Teacher Management
                  </CardTitle>
                  {showcard ? (<img className='image'
                    alt="Card cap"
                    src={studentteacher}
                    accept="image/.jpg"
                  />) : (<CardBody>
                    <CardText className='CardText'>
                      <List>
                        <li className='darkblue'><span className='Card_List'>html</span></li>
                        <li className='success'><span className='Card_List'>CSS</span></li>
                        <li className='blue'><span className='Card_List'>JavaScript</span></li>
                        <li className='yellow'><span className='Card_List'>React</span></li>
                      </List>
                    </CardText>
                    <CardLink href="https://relaxed-bublanina-73046d.netlify.app/">
                      Card Link
                    </CardLink>
                  </CardBody>)}
                  </Card>
              </div>
            )
        }

      </div>
    </Element>
  )
}

export default Certification

