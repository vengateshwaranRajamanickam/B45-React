import React from 'react'
import Slidebar from './Slidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import Scrolltop from './Scrolltop'

export default function Utilitiesanimation(){
    return (
<div id="wrapper">
            <Slidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content"><Navbar /></div>
                <div class="container-fluid">
                    <Animationtopbar />
                    <div class="row">
                       <Animation/>
                    </div>
                </div>
                <Footer />
            </div>
            <Scrolltop />
        </div>


    )
}