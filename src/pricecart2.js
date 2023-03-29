import React from "react";

export default function display() {
    return (
      <div className="container pricing col-lg-4">
      <div className="card-body">
        <h5 className="card-title text-uppercase text-center">Plus</h5>
        <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
        <hr/>
        <ul className="fa-ul">
          <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status
            Reports</li>
        </ul>
        <div className="d-grid">
          <a href="www.guvi.com" className="btn btn-primary ">Button</a>
        </div>
      </div>
    </div>
    )
  }