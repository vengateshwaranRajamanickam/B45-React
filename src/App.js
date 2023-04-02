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
function HomePage() {
  return (
    <div id="wrapper">
      <Slidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content"><Navbar /></div>
        <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="wwww.guvi.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
              class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

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
              <ProjecExample><Colorsystem /></ProjecExample>
              <Illustration><Approach /></Illustration>
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
