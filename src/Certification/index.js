import React, { useState } from 'react'
import { Element } from 'react-scroll'
import { CardBody, CardTitle, CardLink, CardText, Card, List } from 'reactstrap'
import './Certification.css'
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import studentteacher from '../Image/student teacher management.jpg'
import tile from '../Image/TileMatch.png'
import tictactoe from '../Image/TicTacToe.png'
function Certification() {
  const [ios, setios] = useState(true);
  const [showcard1, setshowcard1] = useState(true);
  const [showcard2, setshowcard2] = useState(true);
  const [showcard3, setshowcard3] = useState(true);
  const [showcard4, setshowcard4] = useState(true);
  const [showcard5, setshowcard5] = useState(true);
  //ios switch
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
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked={ios===true? true : false}  />}
          label={ios?"Project" :"Certification"} className='iosswitch' onChange={() => setios(!ios)}
        />
        {
          ios ?
            (
              <div className='grid-container'>
                <Card className='Card' onMouseEnter={() => setshowcard1(false)} onMouseLeave={() => setshowcard1(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5" className='CardTitle'>
                    Student Teacher Management
                  </CardTitle>
                  {showcard1 ? (<img className='image'
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
                    <CardLink className='CardLink' href="https://relaxed-bublanina-73046d.netlify.app/">
                     Open Project
                    </CardLink>
                  </CardBody>)}
                  </Card>
                <Card className='Card' onMouseEnter={() => setshowcard2(false)} onMouseLeave={() => setshowcard2(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5" className='CardTitle'>
                  Tile
                  Match 
                  </CardTitle>
                 
                  {showcard2 ? (<img className='image'
                    alt="Card cap"
                    src={tile}
                    accept="image/.jpg"/>) : (<CardBody>
                    <CardText className='CardText'>
                      <List>
                        <li className='darkblue'><span className='Card_List'>html</span></li>
                        <li className='success'><span className='Card_List'>CSS</span></li>
                        <li className='blue'><span className='Card_List'>JavaScript</span></li>
                        <li className='yellow'><span className='Card_List'>React</span></li>
                      </List>
                    </CardText>
                    <CardLink className='CardLink' href="https://curious-kashata-827486.netlify.app/">
                    Open Project
                    </CardLink>
                  </CardBody>)}
                  </Card>
                <Card className='Card' onMouseEnter={() => setshowcard3(false)} onMouseLeave={() => setshowcard3(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5" className='CardTitle'>
                  Tic Tac Toe Game
                  </CardTitle>
                  
                  {showcard3 ? (<img className='image'
                    alt="Card cap"
                    src={tictactoe}
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
                    <CardLink className='CardLink' href="https://kaleidoscopic-rugelach-a6f4d5.netlify.app/">
                    Open Project
                    </CardLink>
                  </CardBody>)}
                  </Card>
                  <Card className='Card' onMouseEnter={() => setshowcard4(false)} onMouseLeave={() => setshowcard4(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5" className='CardTitle'>
                    Check Weather Api 
                  </CardTitle>
                 
                  {showcard4 ? (<img className='image'
                    alt="Card cap"
                    src={studentteacher}
                    accept="image/.jpg"
                  />) : (<CardBody>
                    <CardText className='CardText'>
                      <List>
                        <li className='darkblue'><span className='Card_List'>html</span></li>
                        <li className='success'><span className='Card_List'>CSS</span></li>
                        <li className='blue'><span className='Card_List'>JavaScript</span></li>
                      </List>
                    </CardText>
                    <CardLink className='CardLink' href="https://genuine-stroopwafel-19d789.netlify.app/">
                    Open Project
                    </CardLink>
                  </CardBody>)}
                   </Card>
                <Card className='Card' onMouseEnter={() => setshowcard5(false)} onMouseLeave={() => setshowcard5(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5" className='CardTitle'>
                    Abi dates e-commerce
                  </CardTitle>
                
                  {showcard5 ? (<img className='image'
                    alt="Card cap"
                    src={studentteacher}
                    accept="image/.jpg"
                  />) : (<CardBody>
                    <CardText className='CardText'>
                      <List>
                        <li className='darkblue'><span className='Card_List'>html</span></li>
                        <li className='success'><span className='Card_List'>CSS</span></li>
                        <li className='blue'><span className='Card_List'>JavaScript</span></li>
                      </List>
                    </CardText>
                    <CardLink className='CardLink' href="https://shimmering-meringue-c49d9a.netlify.app/">
                    Open Project
                    </CardLink>
                  </CardBody>)}
                 </Card>
              </div>) : (
              <div className='grid-container'>
                <Card className='Card' onMouseEnter={() => setshowcard1(false)} onMouseLeave={() => setshowcard1(true)}
                  style={{
                    width: '15rem'
                  }}
                >
                  <CardTitle tag="h5"className='CardTitle'>
                    Student Teacher Management
                  </CardTitle>
                  {showcard1 ? (<img className='image'
                    alt="Card cap"
                    src={studentteacher}
                    accept="image/.jpg"
                  />) : (<CardBody>
                    <CardText className='CardText'>
                      <List>
                        <li className='darkblue'><div className='Card_List'>html</div></li>
                       
                      </List>
                    </CardText>
                
                   
                    
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

