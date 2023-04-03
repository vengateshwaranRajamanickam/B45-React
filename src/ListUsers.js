import React from "react";
import { useState,useEffect } from 'react'
import ListUsersCard from "./ListUsersCard";
import { Container } from 'reactstrap'

export default function Listusers() {
    const [UserData, setUserData] = useState([]);
    useEffect(() => {
        fetch('https://640f08d74ed25579dc43acce.mockapi.io/users').then(res => res.json()).then(data => setUserData(data))
    })
    return (
        <Container>
             <div class="row">
            {
                UserData.map((value,index)=>
                    <ListUsersCard key={index} data={value} />
                   
                )
            }
            </div><br></br>
        </Container>
    )
}