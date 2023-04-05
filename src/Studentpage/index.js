import React from "react";
import { useState, useEffect } from 'react'
import Studentcard from './Component/Studentcard'
import Studentdetails from './Component/Studentdetails'
import { Container, Row,Col } from 'reactstrap'

export default function Listusers() {
    const [UserData, setUserData] = useState([]);
    const [inputarray,setinputarray]=useState([])
    useEffect(() => {
        fetch('https://640f08d74ed25579dc43acce.mockapi.io/amazon').then(res => res.json()).then(data => setUserData(data))
    },[])
    function AddList(id) {
        let tempTodos = UserData[id - 1];
        setinputarray([tempTodos])
    }
    return (
       
            <Row className="Studentpage">
                <Col xs={12} sm={inputarray.length == 0 ? 12 : 8} md={inputarray.length == 0 ? 12 : 6}>
                    {
                        UserData.map((value, index) =>
                            <>
                                <Studentcard key={index} data={value} add={AddList} />
                                <br />
                            </>
                        )
                    }

                </Col>
                <Col xs={12} sm={inputarray.length == 0 ? 12 : 8}  md={inputarray.length == 0 ? 0: 6}>
                {
                    inputarray.map((value, index) => (
                        < Studentdetails key={index} details={value} />
                    ))
                }
                </Col>
            </Row>
      

    )
}