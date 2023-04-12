import logo from './logo.svg';
import css from './App.css';
import Slidebar from './Slidebar'
import Navbar from './Navbar'
import Earningmonthly from './Earningmonthly'
import Areachart  from './Areachart';
import Piechart from './Piechart';
import ProjecExample from './ProjectExample'
import Colorsystem from './Colorsystem';
import Illustration from './Illustration'
import Approach from './Approach';
import Footer from './Footer'
import Scrolltop from './Scrolltop';
import Logoutmodel from './Logoutmodel';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashtopbar from './Dashtopbar';
import {Row,Col} from 'reactstrap'
function HomePage() {
  return (
    <div id="wrapper">
      <Slidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content"><Navbar /></div>
        <div class="container-fluid">
          <Dashtopbar/>
          <Earningmonthly/>
            
          <Row>
            <Areachart />
            <Piechart />
            </Row>
          <Row>
            <Col xs={12} sm={8} md={6} lg={6}>
              <ProjecExample/><Colorsystem />
           </Col>
              <Col xs={12} sm={8} md={6} lg={6}>
              <Illustration></Illustration>
              <Approach />
         </Col>
           </Row>

        </div>
        <Footer/>
        </div>
        <Scrolltop/>
    <Logoutmodel/>
    </div>
    
  );
}

export default HomePage;
