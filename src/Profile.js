import React from "react";
import { useState,useEffect } from 'react'
import ProfileCard from './ProfileCard'

import { Container,Row } from 'reactstrap'

export default function Listusers() {
    const [UserData, setUserData] = useState([]);
    useEffect(() => {
        fetch('https://640f08d74ed25579dc43acce.mockapi.io/users').then(res => res.json()).then(data => setUserData(data))
    })
    return (
        <Container>
             <Row>
            {
                UserData.map((value,index)=>{
                    return(
                    <div><ProfileCard key={index} data={value} /></div>
                    
                )}
                )
            }
            </Row>
        </Container>
    )
}