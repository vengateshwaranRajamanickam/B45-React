

import Slidebar from './Slidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import Scrolltop from './Scrolltop';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Utilitiescolortopbar from './Utilitesborderrtopbar';
import Color from './utlitiescolor'

export default function Utilitiescolor() {
  return (
    <div id="wrapper">
            <Slidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content"><Navbar /></div>
                <div class="container-fluid">
                    <Utilitiescolortopbar />
                    <Color />
                    </div>
                <Footer />
            </div>
            <Scrolltop />
        </div>
    );
    }
 

