import React from "react";
export default function Card({plan,value, userlimit,storagelimit,benefit,limit}) {
  let arr=[];
  arr=benefit.split(",");
    return (
        
        <div className="container-fluid pricing col-lg-4">
        <div className="card-body">
          <h5 className="card-title text-uppercase text-center">{plan}</h5>
          <h6 className="card-price text-center">{value}<span className="period">/month</span></h6>
          <hr/>
          <ul className="fa-ul">
            <li ><span className="fa-li list"><i className="fas fa-check"></i></span><strong>{userlimit} Users</strong></li>
            <li ><span className="fa-li list"><i className="fas fa-check"></i></span>{storagelimit} Storage</li>
            {
                arr.map((value,index)=>{return <li key={index} className={index<limit?"":"text-muted list"}><span className={`${index<limit?"fa-li list":"fa-li "}`}>
                  <i className={` ${index<limit?"fas fa-check":"fas fa-times"}`}></i></span>{value}</li>})
            }
            
          </ul>
    
   
          <div className="d-grid">
            <a href="www.guvi.com" className="btn btn-primary ">Button</a>
          </div>
        </div>
      </div>
      

        )
}
//{`${value==="contact us"?"nav-link disabled":"nav-link text-white"}`}
// <li className="text-muted list"><span className="fa-li list"><i className="fas fa-limit"></i></span>Unlimited Public Projects</li>
            // <li className="text-muted list"><span className="fa-li list"><i className="fas fa-limit"></i></span>Community Access</li>
            // <li className="text-muted list"><span className="fa-li list"><i className="fas fa-limit"></i></span>Unlimited Private Projects</li>
            // <li className="text-muted list"><span className="fa-li list"><i className="fas fa-limit"></i></span>Dedicated Phone Support</li>
            // <li className="text-muted list"><span className="fa-li list"><i className="fas fa-limit"></i></span>Free Subdomain</li>
            // <li className="text-muted list"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Statu Reports</li>