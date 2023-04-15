import {Col,Form,FormGroup,Label,Button} from "reactstrap"
import Srmadvideo from '../Launch into a bright future with SRM.mp4'
import {Formik} from "formik";
export default function Loginadmin() {
  const validate = (values) => {
    const errors = {};
    if (!values.adminid) {
      errors.adminid = "adminid is Required";
    } else if (values.adminid.length <3) {
      errors.adminid = "adminid should have min length 3";
    }
    if (!values.adminPassword) {
      errors.adminPassword = "adminPassword  is Required";
    } else if (values.adminPassword.length <5) {
      errors.adminPassword = "adminPassword  should have min length 5";
    }
    
    return errors;
  };

    return (
      <Formik className="registerpage"
      initialValues={{
        adminid: "",
        adminPassword: "",
      }}
      //onSubmit={}
      validate={validate}
    >
      {({ handleSubmit, handleChange, touched, errors }) => {
        return(  
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
               {touched.adminid && errors.adminid ? (
            <div className="error">{errors.adminid}</div>
          ) : (
            ""
          )}
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
                onChange={handleChange}
              />
          {touched.adminPassword && errors.adminPassword ? (
            <div className="error">{errors.adminPassword}</div>
          ) : (
            ""
          )}
            </Col>
            <Button  color="info" onClick={handleSubmit}>Submit</Button>
          </FormGroup>
          </Form>
  </div>  
</section> 
)}}
</Formik>
    )
}
