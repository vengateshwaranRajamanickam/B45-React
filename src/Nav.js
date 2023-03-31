import React from "react";


export default function Nav({option,title}) {
    return (
        <nav class="navbar navbar-expand-lg text-white bg-dark">
            <a class="navbar-brand text-success" href="www.google.com">{title}</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    {
                        option.map((value)=><li class="nav-item active"><a class={`${value==="contact us"?"nav-link disabled":"nav-link text-white"}`}  href="www.google.com">{value}</a></li>)
                    }
                </ul>
                <span class="search">
               <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
               </span >  
                <span class="searchbutton"><button class="btn btn-outline-success btn-float-left" type="submit">Search</button> </span>
               
               
            </div>
        </nav>
        )
        }