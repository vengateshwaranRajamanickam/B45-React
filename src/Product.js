
import React from 'react';
import {
    Card,Button
       } from "reactstrap";

export default function Product({ title,name,id,description}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>title</Card.Title>
        <Card.Title>name</Card.Title>
        <Card.Text>description
        </Card.Text>
        
        <Button variant="primary">id</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

