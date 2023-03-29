import React from "react";
// import List from "./List"
export default function Card({value,userlimit,storagelimit,benefit}) {
  
    return (
        
        <div className="container-fluid pricing col-lg-4">
        <div className="card-body">
          <h5 className="card-title text-uppercase text-center">Plus</h5>
          <h6 className="card-price text-center">{value}<span className="period">/month</span></h6>
          <hr/>
          <ul className="fa-ul">
            <li className="text-muted list"><span className="fa-li list"><i className="fas fa-check"></i></span><strong>{userlimit}</strong></li>
            <li className="text-muted list"><span className="fa-li list"><i className="fas fa-check"></i></span>{storagelimit}</li>
            <li className="text-muted list"><span className="fa-li list"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
            <li className="text-muted list"><span className="fa-li list"><i className="fas fa-check"></i></span>Community Access</li>
            <li className="text-muted list"><span className="fa-li list"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
            <li className="text-muted list"><span className="fa-li list"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
            <li className="text-muted list"><span className="fa-li list"><i className="fas fa-check"></i></span>Free Subdomain</li>
            <li className="text-muted list"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Statu Reports</li>
          </ul>
          {/* <List len={benefit.split(",").length}/> */}
   {



   }
          <div className="d-grid">
            <a href="www.guvi.com" className="btn btn-primary ">Button</a>
          </div>
        </div>
      </div>
      

        )
}