import { Row, Col,Container,Form,FormGroup,Label,Input} from "reactstrap"
import Srmadvideo from './Launch into a bright future with SRM.mp4'
export default function Loginadmin() {
    return (
<section classname="home">
  <div className="overlay">
  <video  muted autoPlay loop >< source src={Srmadvideo} type="video/mp4"/></video>
  </div>
  <div className="Login">  
        <Form>
          <FormGroup row>
            <Label for="Name" sm={2} tag="h6">
            Admin id
            </Label>
            <Col sm={10}>
              <input className="input"
                id="admiinid"
                name="adminid"
                placeholder="Admin id"
                type="text" 
               // onChange={context.handleChange}
               //innerRef={inputref}
              />
              
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Student id" sm={2}>
            Admin Password
            </Label>
            <Col sm={10}>
              <input 
                id="adminpassword"
                name="adminPassword"
                placeholder="Admin Password"
                type="numberic"
                //onChange={context.handleChange}
              />
            </Col>
          </FormGroup>
          </Form>
  </div>  
</section> 
    )
}
