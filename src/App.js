import React from "react";
import Card from "./Card";
import response from "./inputcard.json";
import Nav from "./Nav.js";


export default function Services() {
    let option = ["Home",
        "payment",
        "order",
        "contact us"

    ]
    let  title="amazon"
    return (
        <div>
            <section>
            {
                <Nav option={option} title={title} />
            }
            </section>
            <section className="contact bg-success ">
                <div className="container ">
                    <h2 className="text-white">We love new friends!</h2>
                    <div className="row">
                        {response.map((res, index) => (
                            <Card
                                key={index}
                                index={index}
                                title={res.title}
                                imageurl={res.imageurl}
                            />
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
}

