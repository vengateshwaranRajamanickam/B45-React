import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap'
import Icon from './Icon'
import {ToastContainer,toast} from 'react-toastify'
import { useEffect, useState,useLayoutEffect} from 'react';
let array = Array(9).fill("empty")
console.log(array)
export default function App() {
  const [player, setplayer] = useState(false);
  const [winner, setwinner] = useState(false);
  useLayoutEffect(() => {
    document.body.style.background=" cornflowerblue";
   });
useEffect(()=>{
if(winner==="Draw"){
 toast.info(`Match Draw`);
}
else if(winner){
  toast.success(`player ${winner} is win`)
}
},[winner])

  function playerclick(index) {
  if(array[index] ==="empty"){
    array[index] = player ? "React" : "Javascript"
    setplayer(!player);
    winnercheck(array[index]);
  }
  else toast.warn("Box already selected")
  
  }
  function winnercheck(winnername) {
    if (array[0] !== "empty" && array[1] === array[0] && array[2] === array[0]) {
      setwinner(winnername)
    }
    else if (
      array[3] === array[4] &&
      array[3] === array[5] &&
      array[3] !== "empty"
    ) {
      setwinner(winnername)
    } else if (
      array[6] === array[7] &&
      array[6] === array[8] &&
      array[6] !== "empty"
    ) {
      setwinner(winnername)
    } else if (
      array[0] === array[4] &&
      array[0] === array[8] &&
      array[0] !== "empty"
    ) {
      setwinner(winnername)
    } else if (
      array[2] === array[4] &&
      array[2] === array[6] &&
      array[2] !== "empty"
    ) {
      setwinner(winnername)
    } else if (
      array[1] === array[4] &&
      array[1] === array[7] &&
      array[1] !== "empty"
    ) {
      setwinner(winnername)
    } else if (
      array[0] === array[3] &&
      array[0] === array[6] &&
      array[0] !== "empty"
    ) {
      setwinner(winnername)
    } else if (
      array[2] === array[5] &&
      array[2] === array[8] &&
      array[2] !== "empty"
    ) {
      setwinner(winnername)
    } else if(
      array[0] !== "empty" &&
      array[1] !== "empty" &&
      array[2] !== "empty" &&
      array[3] !== "empty" &&
      array[4] !== "empty" &&
      array[5] !== "empty" &&
      array[6] !== "empty" &&
      array[7] !== "empty" &&
      array[8] !== "empty"
    )
      {
        let temp="Draw"
        setwinner(temp)
    }
  }
  function Reset() {
    setwinner(false)
    setplayer(false)
    array.fill("empty", 0, 9)
  }
  return (
    <Container >
       <h3 className='gametitle mt-4' style={{textAlign:"center"}}>Tic Tac Toe Game</h3> 
      <Row>
      
        <Col xs={{ offset: 4, size: 4 }} >
          <div className='tictac mt-4'>
            {
              array.map((value, index) => {
                return (
                  <div className='box' key={index} onClick={() => playerclick(index)}><Icon iconname={value} /></div>
                )
              })
            }
          </div>
        </Col>
        <Col xs={{ offset: 1, size: 3 }} >
        { winner==="Draw"?  <div><h3>Match:"Draw"</h3>
        <Button color="info" onClick={Reset}>Reset</Button></div> : winner? <div><h3>winner:{winner}</h3>
        <Button color="info" onClick={Reset}>Reset</Button></div> :""}
      </Col>
        <ToastContainer/>   
      </Row>
    </Container>
//style={{ display: 'inline', margin: "4vw" }}
  )
}


