import React, { useContext } from "react";
import Teachercard from './Component/Teachercard'
import Teacherdetail from './Component/Teacherdetail'
import { Row,Col } from 'reactstrap';
import Context from '../Context';

export default function Student(){
    const context=useContext (Context);
    return (
       <Row className="teacherpage">
                <Col xs={12} sm={context.inputarray.length === 0 ? 12 : 8} md={context.inputarray.length === 0 ? 12 : 6}>
                    {
                        context.UserData.map((value, index) =>
                            <>
                                < Teachercard key={index} data={value} add={context.Showdetail} />
                                <br />
                            </>
                        )
                    }

                </Col>
                <Col xs={12} sm={context.inputarray.length === 0 ? 12 : 8}  md={context.inputarray.length === 0 ? 0: 6}>
                {
                    context.inputarray.map((value, index) => (
                        < Teacherdetail key={index} details={value} reset={context.Showdetail} deletefile={context.Deletedetail}  Updatedetail={context.Updatedetail}/>
                    ))
                }
                </Col>
            </Row>
      

    )
}