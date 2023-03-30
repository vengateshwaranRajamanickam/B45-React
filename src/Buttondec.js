import React from "react";
export default function Buttondec({ incpara ,decpara, reset}) {
    return (
        <div>
            <button onClick={incpara}>increment</button>
            <button onClick={decpara}>decrement</button>
            
            <button onClick={reset}>Reset</button>
        </div>
    )
}