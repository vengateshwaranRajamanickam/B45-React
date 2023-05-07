import React from 'react'
import { Col, Form, FormGroup, Label, Button, Container } from "reactstrap"
import { Formik } from "formik";
import axios from 'axios'
import { API } from "../API_path/global";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function Forgotpassword() {
  const validate = (values) => {
    const errors = {}
    if (!values.userEmail) {
      errors.userEmail = "userEmail is Required";
    } else if (values.userEmail.length < 3) {
      errors.userEmail = "userEmail should have min length 3";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
      errors.userEmail = "userEmail isn't valid format example@shop.com";
    }
    return errors;
  }
  async function result(value) {
    await axios.post(`${API}user/reset`, value)
      .then(res => toast.success(`${res.data.message}`))
      .catch(err => toast.error(`${err.message}`))

  }
  return (
    <div className='pagetitle'>Forgotpassword
      <Container className="home">
        <Formik
          initialValues={{
            userEmail: "",
            link: ""
          }}
          onSubmit={(value => result(value))}
          validate={validate}
        >
          {({ handleSubmit, handleChange, touched, errors }) => {
            return (
              <div className="resetcontainer">
                <Form>
                  <ToastContainer />
                  <FormGroup row>
                    <Label for="User Name" sm={2} className='label'>
                      User Name
                    </Label>
                    <Col sm={10}>
                      <input className="input"
                        id="userEmail"
                        name="userEmail"
                        placeholder="User Email"
                        type="text"
                        onChange={handleChange}
                      />
                      {touched.userEmail && errors.userEmail ? (
                        <div className="error">*{errors.userEmail}</div>
                      ) : (
                        ""
                      )}
                    </Col>
                  </FormGroup>
                  <Button className="reset_button" color="info" onClick={handleSubmit}>Mail Reset link</Button>
                  <div className="forgot_password">verify link ?<Link to="/verification">click here</Link></div>
                </Form>
              </div>
            )
          }}
        </Formik>
      </Container>
    </div>
  )
}
