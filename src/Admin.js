import Slidebar from "./Slidebar";
import Loginadmin from './Loginadmin'
import { Row, Col,Container,Form,FormGroup,Label,Input} from "reactstrap"
import Srmadvideo from './Launch into a bright future with SRM.mp4'
export default function Admin() {
    return (
      <Row>
  <Col
        xs={6}
        sm={3}
        md={3}
      >
<Slidebar/>
</Col> 
<Col
        xs={6}
        sm={3}
        md={3}
      >
 <Loginadmin/>
      </Col> 
      </Row>
    )
}