import React, { useContext } from "react";
import Teachercard from "./Component/Teachercard";
import Teacherdetail from "./Component/Teacherdetail";
import { Row, Col } from "reactstrap";
import Context from "../Context";

export default function Student() {
  const context = useContext(Context);
  return (
    <Row className="teacherpage">
      <Col
        xs={12}
        sm={context.inputarray.length === 0 ? 12 :12 }
        md={context.inputarray.length === 0 ? 12 : 6}
      >
        {context.UserTeacher.map((value, index) => (
          <>
            <Teachercard
              key={index}
              data={value}
              add={context.TeacherShowdetail}
            />
            <br />
          </>
        ))}
      </Col>
      <Col
        xs={12}
        sm={context.inputarray.length === 0 ? 0 : 12}
        md={context.inputarray.length === 0 ? 0 : 6}
      >
        {context.inputarray.map((value, index) => (
          <Teacherdetail
            key={index}
            details={value}
            reset={context.TeacherShowdetail}
            deletefile={context.TeacherDeletedetail}
            Updatedetail={context.TeacherUpdatedetail}
          />
        ))}
      </Col>

    </Row>
  );
}
