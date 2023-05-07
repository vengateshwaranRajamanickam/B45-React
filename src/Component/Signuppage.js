import React from "react";
import { Col, Form, FormGroup, Label, Button, Container } from "reactstrap"
import { Formik } from "formik";
import axios from 'axios'
import { API } from "../API_path/global";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
export default function Loginadmin() {
    const validate = (values) => {
        const errors = {}
        if (!values.userEmail) {
            errors.userEmail = "useremail is required";
        } else if (values.userEmail.length < 3) {
            errors.userEmail = "useremail should have min length 3";
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
            errors.userEmail = "userEmail isn't valid format example@shop.com";
        }
        if (!values.password) {
            errors.password = "password is required";
        } else if (values.password.length < 5) {
            errors.password = "password should have min length 5";
        }
        else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.password)) {
            errors.password = `password must contain atleat one uppercase,one digit,
                              one special(_, +,-, @, %,.)`;
        }
        return errors;
    };
    async function result(value) {
        await axios.post(`${API}user/signup`, value)
            .then(res => toast.success(`${res.data.message}`))
            .catch(err => toast.error(`${err.message}`));
    }
    return (
        <div className='pagetitle'>Signup Page
            <Container className="home">
                <Formik
                    initialValues={{
                        userEmail: "",
                        password: ""
                    }}
                    onSubmit={(value) => result(value)}
                    validate={validate}
                >
                    {({ handleSubmit, handleChange, touched, errors }) => {
                        return (
                            <div className="logincontainer">
                                <Form>
                                    <ToastContainer />
                                    <FormGroup row>
                                        <Label for="User Email" sm={2} className='label'>
                                            User Email
                                        </Label>
                                        <Col sm={10}>
                                            <input className="input"
                                                id="userEmail"
                                                name="userEmail"
                                                placeholder="User Email "
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
                                    <FormGroup row>
                                        <Label for="Password" sm={2} className='label'>
                                            Password
                                        </Label>
                                        <Col sm={10}>
                                            <input className="input"
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                                type="numberic"
                                                onChange={handleChange}
                                            />
                                            {touched.password && errors.password ? (
                                                <div className="error">*{errors.password}</div>
                                            ) : (
                                                ""
                                            )}
                                        </Col>
                                    </FormGroup>
                                    <Button className="login_button" color="info" onClick={handleSubmit}>Submit</Button>
                                    <div className="forgot_password">already have account ?<Link to="/login">click here</Link></div>
                                </Form>
                            </div>
                        )
                    }}
                </Formik>
            </Container>
        </div>
    )
}
