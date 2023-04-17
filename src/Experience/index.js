import React, { useState } from 'react'
import './Experience.css'
import { Element } from 'react-scroll'
import {List,Row,Card,CardBody,CardTitle,Col,CardText,CardSubtitle} from 'reactstrap'

function Experience() {
  var myNumber = 0;
const yearexperience=setInterval(()=>{
  myNumber++;
  console.log(myNumber)
  if (myNumber<6) {
      document.getElementById('myNumber').innerHTML = myNumber+"+";
  } else {
    clearInterval(yearexperience);
  }
},1000);

  return (
    <Element>
      <Row className='Experience_Container'>
     <Col lg={5} md={7} xs={12}>
      <Card
        className="teachercard"
        style={{
          border: "none"
        }}
      >
        <CardBody>
          <CardTitle tag="h5" className='Exp_CardTitle'>
          <div className='Exp_CardTitle_Name'>MultilevelTechnologies, Abu dhabi </div> <div className='Exp_CardTitle_Year'>Oct 2019 - Nov 2022</div>
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          Project Coordinator
          </CardSubtitle>
          <CardText>
            <List>
              <li>Handling SLM calls and providing support for customer engineers.</li>
              <li>Monitoring of RTA kiosks, database and create ticket for kiosk issue.</li>
              <li> Installation and configuration of Database, Switch and kiosk.</li>
</List>
</CardText>
</CardBody>
</Card>
      </Col>
      <Col lg={1} md={1} xs={1}>
      <Card
       className='yearexperience_card'
        style={{
          border: "none"
        }}
      >
        <CardBody>
          <CardTitle tag="h5">
           Experience
          <span class="yearexperience" id="myNumber" data-to-value="10" data-from-value="0" ></span>
          </CardTitle>
        </CardBody>
      </Card>
      </Col>
      <Col lg={5} md={7} xs={12}>
    <Card
        className="teachercard"
        style={{
          border: "none"
        }}
      >
        <CardBody>
          <CardTitle tag="h5">
          BarrontechServe
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          SeniorService Engineer
          </CardSubtitle>
          <CardText>
          <li>Install and Service level maintenance of NCR and OKI cdm machines.</li>
          <li> Loading Ncr aptra version and updating latest firmware for device.</li>
          <li>Other software update activities like BRM encryption, hard disk encryption</li>
          </CardText>
        </CardBody>
      </Card>
      </Col>
      </Row>
    </Element>
  )
}

export default Experience