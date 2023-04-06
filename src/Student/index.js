import React, { useContext } from "react";
import Studentcard from './Component/Studentcard';
import Studentdetail from './Component/Studentdetail';
import { Row,Col } from 'reactstrap';
import Context from '../Context';

export default function Student(){
    const context=useContext (Context);
    return (
       <Row className="studentpage">
                <Col xs={12} sm={context.inputarray.length === 0 ? 12 : 8} md={context.inputarray.length === 0 ? 12 : 6}>
                    {
                        context.UserStudent.map((value, index) =>
                            <>
                                <Studentcard key={index} data={value} add={context.StudentShowdetail} />
                                <br />
                            </>
                        )
                    }

                </Col>
                <Col xs={12} sm={context.inputarray.length === 0 ? 12 : 8}  md={context.inputarray.length === 0 ? 0: 6}>
                {
                    context.inputarray.map((value, index) => (
                        < Studentdetail key={index} details={value} reset={context.StudentShowdetail}  Updatedetail={context.StudentUpdatedetail}/>
                    ))
                }
                </Col>
            </Row>
      

    )
}
//deletefile={context.StudentDeletedetail}