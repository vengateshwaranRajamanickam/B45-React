import React from "react";


export default function Nav({option}) {
    return (
        <nav class="navbar navbar-expand-lg text-white bg-dark">
            <a class="navbar-brand text-success" href="www.google.com">tit</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    {
                        option.map((value)=><li class="nav-item active"><a class="nav-link text-white" href="www.google.com">{value}</a></li>)
                    }
                </ul>
                <span>
               <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
               </span>   
               
            </div>
        </nav>
        )
        }