import React from "react";
import Card from "./card.js";
import response from "./input.json"

export default function cardsource() {
    return (
        <div class="row">
             {response.map((res,index) => ( 
                            <Card
                                key={index}
                                value={res.value}
                                userlimit={res.userlimit}
                                storagelimit={res.storagelimit}
                                benefit={res.benefit}
                            />
            ))}
        </div>
    );
}
