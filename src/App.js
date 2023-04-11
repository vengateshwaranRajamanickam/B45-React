import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Card, CardBody, CardImg, Button } from 'reactstrap'
import { useState, useEffect,useLayoutEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
let array = [
  { isVisbile: false, value: "https://static.javatpoint.com/images/javascript/javascript_logo.png" },
  { isVisbile: false, value: "https://static.javatpoint.com/images/javascript/javascript_logo.png" },
  { isVisbile: false, value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPtwTQ7koKuwHp7f7UNGMjI40qtP8pXnwgp5YMpOKTA&s" },
  { isVisbile: false, value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPtwTQ7koKuwHp7f7UNGMjI40qtP8pXnwgp5YMpOKTA&s" },
  { isVisbile: false, value: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
  { isVisbile: false, value: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
  { isVisbile: false, value: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&v=enabled&s=86f4a4bd647772d34d2de32a0e4281dd0ab095f1" },
  { isVisbile: false, value: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&v=enabled&s=86f4a4bd647772d34d2de32a0e4281dd0ab095f1" },
  { isVisbile: false, value: "https://www.opc-router.com/wp-content/uploads/2021/03/mongodb_thumbnail-200x269.png" },
  { isVisbile: false, value: "https://www.opc-router.com/wp-content/uploads/2021/03/mongodb_thumbnail-200x269.png" },

];
let gameimage = "https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=826&t=st=1681219938~exp=1681220538~hmac=1410e02bae3ae30e2824664d91adad6e8aabc929233f1eecab4835f4738ed906";

export default function App() {
  const [shuffle, setshuffle] = useState(array);
  const [winner, setwinner] = useState(false);
  let [attempt, setattempt] = useState(0);
  const [count, setcount] = useState(0);
  let [previndex, setprevindex] = useState(1000);
  let [attemptdisplay,setattemptdisplay]=useState(0);
  function shufflefn(arr) {

    for (let i = 0; i < arr.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setshuffle([...arr])
  }
  // useLayoutEffect(() => {
  //   document.body.style.background="aqua";
  //  });
  useEffect(() => {
    shufflefn(array)
  }, [])

  function display(index) {
    if (count < 2 && previndex !== index) {
      let temp = shuffle;
      temp[index].isVisbile = true;
      setshuffle(temp);
      setcount(count + 1);

      if (count === 0) {
        setwinner(temp[index].value)
        setprevindex(index);

      }
      else {
        setattempt(attempt+1);
        checkwinnerfn(index)
      }
    }
  }
  function checkwinnerfn(index) {
    if (winner === shuffle[index].value) {
      setwinner(true)
      setcount(0);
      setprevindex(1000);
      setattemptdisplay(attempt);
      setattempt(1);
      toast.success("Match")
    }
    else {
      setTimeout(() => {
        setcount(0);
        setprevindex(1000);
        let temp = shuffle.map((value,index) =>{return { ...value, isVisbile: false } });
        setshuffle(temp)
      }, 1000);
    }
  }

  function Reset() {
    let temp = shuffle.map((value, index) => { return { ...value, isVisbile: false } });
    setshuffle(temp);
    setattempt(0);
    setwinner(false);
    setprevindex(1000);
    toast.info("Game Reseted")
  }
  return (
    <Container >
      <Row>
        <h3 style={{textAlign:"center",margin:20}}>Tile Match</h3>
        <Col md={{ offset: 4, size: 4 }}>
          <div className='grid'>
            {
              shuffle.map((value, index) => {
                return (
                  <Card  onClick={() => display(index)}>
                    <CardBody >{value.isVisbile ? <CardImg src={value.value} alt="" />
                      : <CardImg src={gameimage} alt="" />}
                    </CardBody>
                  </Card>

                )
              })
            }
          </div>
        </Col>
        <Col md={{ offset: 1, size: 3 }}>
          <Button color="info" onClick={Reset}>Reset</Button>
          {
            winner === true ?<h4>winner: on {attemptdisplay} attempt</h4>: ""
          }
          
        </Col>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Row>
    </Container>

  )
}
