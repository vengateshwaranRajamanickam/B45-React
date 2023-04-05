import React, { useContext } from "react";
import Teachercard from './Teachercard'
import Teacherdetails from './Teacherdetail'
import { Row,Col } from 'reactstrap'
import Datacontext from './Context'
export default function Listusers() {
const context =useContext(Datacontext)
    return (
       
            <Row className="teacherpage">
                <Col xs={12} sm={ context.inputarray.length === 0 ? 12 : 8} md={context.inputarray.length === 0 ? 12 : 6}>
                    {
                        context.UserData.map((value, index) =>
                            <>
                                < Teachercard key={index} data={value} add={context.AddList} />
                                <br />
                            </>
                        )
                    }

                </Col>
                <Col xs={12} sm={context.inputarray.length === 0 ? 12 : 8}  md={context.inputarray.length === 0 ? 0: 6}>
                {
                    context.inputarray.map((value, index) => (
                        < Teacherdetails key={index} details={value} />
                    ))
                }
                </Col>
            </Row>
      

    )
}