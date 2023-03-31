import React from "react";
export default function Buttondec({reset}) {
    return (
        <div>
            <button className="Reset" onClick={()=>reset(0,0)}>Reset</button>
        </div>
    )
}