import React, { useState } from 'react'
import './Experience.css'
import { Element } from 'react-scroll'
import {List,Row,Card,CardBody,CardTitle,Col,CardText,CardSubtitle, Container} from 'reactstrap'

function Experience() {
  var myNumber = 0;
const yearexperience=setInterval(()=>{
  myNumber++;
  if (myNumber<6) {
      document.getElementById('myNumber').innerHTML = myNumber+"+";
  } else {
    clearInterval(yearexperience);
  }
},1000);

  return (
    <Element>
      <Container className='Experience_Container' id="Experience">
      <Card
       className='yearexperience_card'
        style={{
          height:150
        }}
      >   <CardBody>
          <CardTitle tag="h5">
           Experience
          <span className="yearexperience" id="myNumber" data-to-value="10" data-from-value="0" ></span>
          </CardTitle>  
     </CardBody>
      </Card>
      <Card
        className="Exp_Card"
        style={{
          border: "none"
        }}
      >
        <CardBody>
          <CardTitle tag="h5" className='Exp_CardTitle'>
          <div className='Exp_CardTitle_Name'>MultilevelTechnologies, Abu dhabi </div> <div className='Exp_CardTitle_Year'>2019 - 2022</div>
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
    <Card
        className="Exp_Card"
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
      {/* </Col> */}
      </Container>
    </Element>
  )
}

export default Experience