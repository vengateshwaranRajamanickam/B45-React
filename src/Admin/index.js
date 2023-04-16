import Slidebar from "./Slidebar";
import Loginadmin from './Loginadmin'
import { Row, Col, Container} from "reactstrap"

export default function Admin() {
    return (
      
      <Container className="form">
      <Row >
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
      </Container>
    )
}