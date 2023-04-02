import logo from './logo.svg';
import css from './App.css';
import Slidebar from './Slidebar'
import Navbar from './Navbar'
import Earningmonthlyrow from './Earningmonthlyrow'
import Areachart  from './Areachart';
import Piechart from './Piechart';
import ProjecExample from './ProjectExample'
import Colorsystem from './Colorsystem';
import Illustration from './illustration'
import Approach from './Approach';
import Footer from './Footer'
import Scrolltop from './Scrolltop';
import Logoutmodel from './Logoutmodel';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashtopbar from './Dashtopbar';

function HomePage() {
  return (
    <div id="wrapper">
      <Slidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content"><Navbar /></div>
        <div class="container-fluid">
          <Dashtopbar/>

          <div class="row">
            <Earningmonthlyrow />
            <Earningmonthlyrow />
            <Earningmonthlyrow />
            <Earningmonthlyrow />
          </div>
          <div class="row">
            <Areachart />
            <Piechart />
          </div>
          <div class="row">
            <div class="col-lg-6 mb-4">
              <ProjecExample/><Colorsystem />
              </div>
              <div class="col-lg-6 mb-4">
              <Illustration></Illustration>
              <Approach />
            </div>
          </div>

        </div>
        <Footer/>
        </div>
        <Scrolltop/>
    <Logoutmodel/>
    </div>
    
  );
}

export default HomePage;
