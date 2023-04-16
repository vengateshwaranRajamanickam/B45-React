import React, { useContext } from "react";
import Studentcard from "./Component/Studentcard";
import Studentdetail from "./Component/Studentdetail";
import { Row, Col,Button } from "reactstrap";
import Context from "../Context";
import Ad1 from '../Ad/srm admission open ad.jpg';
export default function Student() {
  const context = useContext(Context);

  return (
    <>
    <div class="pop" id="pop" onClick={context.closepop} >
    {
        setTimeout(()=>{
          let pop=document.getElementById("pop")
          pop.classList.add("openpop")
        },2000)
      }
        <img src={Ad1} alt="admissionad" title="admissionad"/>
        <Button class="button" type="button" >Check our college website for more details </Button>
    </div>
    
    <Row className="studentpage">
      <Col
        xs={12}
        sm={context.inputarray.length === 0 ? 12 : 8}
        md={context.inputarray.length === 0 ? 12 : 6}
      >
        {context.UserStudent.map((value, index) => (
          <>
            <Studentcard
              key={index}
              data={value}
              add={context.StudentShowdetail}
            />
            <br />
          </>
        ))}
      </Col>
      <Col
        xs={12}
        sm={context.inputarray.length === 0 ? 0: 8}
        md={context.inputarray.length === 0 ? 0 : 6}
      >
        {context.inputarray.map((value, index) => (
          <Studentdetail
            key={index}
            details={value}
            reset={context.StudentShowdetail}
            deletefile={context.StudentDeletedetail}
            Updatedetail={context.StudentUpdatedetail}
          />
        ))}
      </Col>
    </Row>
    </>
  );
}
