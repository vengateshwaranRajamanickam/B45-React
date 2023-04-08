import React, { useContext, useRef, } from 'react'
import {Container,Row,Col,Input,Button} from 'reactstrap'
import { Calc } from './Context'
import { DISPLAY, INPUTNUMBER,CLEAR } from './Actiontype';
 
export default function Display(){
    const {state,dispatch}=useContext(Calc);
    const inputref=useRef();
   

    return(
        <Container>
            <Row>
                <Col xs={12}>
                <Input innerRef={inputref} value={[state.prevdata]} onChange={()=>dispatch({type:DISPLAY,payload:inputref.current.value})}/>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button className='b'onClick={()=>dispatch({type:CLEAR,payload:'1'})} >Reset</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button className='b'>Back</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                 <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'1'})} className='b'>1</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'2'})} className='b'>2</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'3'})}className='b'>3</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'4'})}className='b'>4</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'5'})}className='b'>5</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'6'})}className='b'>6</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'7'})}className='b'>7</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'8'})}className='b'>8</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'9'})}className='b'>9</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'10'})}className='b'>10</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'0'})}className='b'>0</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button onClick={()=>dispatch({type:INPUTNUMBER,payload:'00'})}className='b'>00</Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button className='b'>+</Button >
                </Col>
                <Col xs={12} md={6} lg={3}>
                <Button className='b'>Enter</Button>
                </Col>

            </Row>
        </Container>

    )
}