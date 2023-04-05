import React, { useContext } from "react";
import Studentcard from './Studentcard'
import Studentdetail from './Studentdetail'
import { Row,Col } from 'reactstrap'
import Datacontext from './Context'

export default function Student(){
    const context=useContext(Datacontext);
    return (
       
            <Row className="studentpage">
                <Col xs={12} sm={context.inputarray.length === 0 ? 12 : 8} md={context.inputarray.length === 0 ? 12 : 6}>
                    {
                        context.UserData.map((value, index) =>
                            <>
                                <Studentcard key={index} data={value} add={context.AddList} />
                                <br />
                            </>
                        )
                    }

                </Col>
                <Col xs={12} sm={context.inputarray.length === 0 ? 12 : 8}  md={context.inputarray.length === 0 ? 0: 6}>
                {
                    context.inputarray.map((value, index) => (
                        < Studentdetail key={index} details={value} />
                    ))
                }
                </Col>
            </Row>
      

    )
}