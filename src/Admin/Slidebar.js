import React from 'react'
export default function Sliebar(){
    return (
<div class="sidebarcontainer container-fluid">    
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " id="accordionSidebar">

<a class="sidebar-brand d-flex align-items-center justify-content-center" href="./Student">
{/*idebar - Brand*/}
    <div class="sidebar-brand-text mx-3">SRM Admin </div>
</a>

{/*Sidebar - Brand*/}
<hr class="sidebar-divider my-0"/>

<li class="nav-item active">
    <a class="nav-link" href="./admin">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>


{/*divider*/}
<hr class="sidebar-divider"/>

{/*Heading*/}
<div class="sidebar-heading">
    College adminstration
</div>

{/*Nav Item - Pages Collapse Menu*/}
<li class="nav-item">
    <a class="nav-link collapsed" href="./" data-toggle="collapse" data-target="www.guvi.vomcollapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-cog"></i>
        <span>Student</span>
    </a>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="www.guvi.vomaccordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <a class="collapse-item" href="buttons.html">Buttons</a>
            <a class="collapse-item" href="cards.html">Cards</a>
        </div>
    </div>
</li>

{/*Nav Item - Utilities Collapse Menu*/}
<li class="nav-item">
    <a class="nav-link collapsed" href="./Teacher" data-toggle="collapse" data-target="www.guvi.vomcollapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fas fa-fw fa-wrench"></i>
        <span>Teacher</span>
    </a>
    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
        data-parent="www.guvi.vomaccordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <a class="collapse-item" href="utilities-color.html">Colors</a>
            <a class="collapse-item" href="utilities-border.html">Borders</a>
            <a class="collapse-item" href="utilities-animation.html">Animations</a>
            <a class="collapse-item" href="utilities-other.html">Other</a>
        </div>
    </div>
</li>

{/*Divider */} 
<hr class="sidebar-divider"/>

{/* Heading */}
<div class="sidebar-heading">
    Report
</div>

{/* Nav Item - Pages Collapse Menu */}
<li class="nav-item">
    <a class="nav-link collapsed" href="www.guvi.vom" data-toggle="collapse" data-target="www.guvi.vomcollapsePages"
        aria-expanded="true" aria-controls="collapsePages">
        <i class="fas fa-fw fa-folder"></i>
        <span>Payment</span>
    </a>
    <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="www.guvi.vomaccordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            <a class="collapse-item" href="login.html">Login</a>
            <a class="collapse-item" href="register.html">Register</a>
            <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <a class="collapse-item" href="404.html">404 Page</a>
            <a class="collapse-item" href="blank.html">Blank Page</a>
        </div>
    </div>
</li>

{/*Nav Item - Charts */} 
<li class="nav-item">
    <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Performance Charts</span></a>
</li>

{/*Nav Item - Tables */} 
<li class="nav-item">
    <a class="nav-link" href="tables.html">
        <i class="fas fa-fw fa-table"></i>
        <span>Event Tables</span></a>
</li>

{/* Divider */}
<hr class="sidebar-divider d-none d-md-block"/>

{/* Sidebar Toggler (Sidebar) */}
<div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>
</ul>
</div> 
    )
}