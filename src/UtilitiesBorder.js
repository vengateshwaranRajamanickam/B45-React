import React from 'react'
import UtilitiesBordertopbar from './Utilitesborderrtopbar'
import Border from './Border'
import Slidebar from './Slidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import Scrolltop from './Scrolltop'

export default function UtilitiesBorder() {
    return (
        <div id="wrapper">
            <Slidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content"><Navbar /></div>
                <div class="container-fluid">
                    <UtilitiesBordertopbar />
                    <div class="row">
                        <Border />
                    </div>
                </div>
                <Footer />
            </div>
            <Scrolltop />
        </div>

    );
    }