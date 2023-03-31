import React from "react";

export default function Card({ imageurl, index }) {
    return (
       
            <div className="card container-fluid  col-lg-4" style={{ width: "18rem" }}>
                <img src={imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{index%2===0?"even":"odd"}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <a
                        href="www.google.com"
                        className={index%2===0?"btn btn-dark":"btn btn-primary"}
                    >
                        Go somewhere
                    </a>
                </div>
            </div>
           
        
    );
}
