import React from "react";
import { useState, useEffect } from 'react'
import Studentcard from './Studentcard'
import Studentdetails from './Studentdetails'
import { Container, Row,Col } from 'reactstrap'

export default function Listusers() {
    const [UserData, setUserData] = useState([]);
    const [inputarray,setinputarray]=useState({})
    useEffect(() => {
        fetch('https://640f08d74ed25579dc43acce.mockapi.io/amazon').then(res => res.json()).then(data => setUserData(data))
    },[])
    function AddList(id) {
        //setinputarray (false)
    }
    return (
        <Container>
            <Row >
            
                 <Col  xs={12} sm={8} md={6} lg={6}>
                                  {
                    UserData.map((value, index) =>
                        <Studentcard key={index} data={value} add={AddList} />
                    )
                }
               
                </Col>
                {/* {
                    if(inputarray==true){
                inputarray.map((value, index) => (
                                < Studentdetails key={index} details={value} />
                            ))}
                } */}
            </Row>
            </Container>
       
    )
}