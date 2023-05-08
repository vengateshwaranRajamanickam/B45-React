import React from 'react'
import { Col, Form, FormGroup, Label, Button, Container } from "reactstrap"
import { Formik } from "formik";
import axios from 'axios'
import { API } from "../API_path/global";
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
        if (!values.password) {
            errors.password = "password is required";
        } else if (values.password.length < 5) {
            errors.password = "password should have min length 5";
        }
        else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.password)) {
            errors.password = `password must contain atleat one uppercase,one digit,
                              one special(_, +,-, @, %,.)`;
        }
        if (!values.link) {
            errors.link = "verificationlink is Required";
        }
        return errors;
    }
    async function result(value) {
        await axios.post(`${API}user/verification`, value)
        .then(res => toast.success(`${res.data.message}`)
        )
        .catch(err => toast.error(`${err.message}`))
    }
    return (
        <div className='pagetitle'>verification 
            <Container className="home">
                <Formik
                    initialValues={{
                        userEmail: "",
                        link: ""
                    }}
                    onSubmit={ (value) =>result(value)}
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
                                                placeholder="UserEmail"
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
                                          New  Password
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
                                    <FormGroup row>
                                        <Label for="User Name" sm={2} className='label'>
                                            Verification link
                                        </Label>
                                        <Col sm={10}>
                                            <input className="input"
                                                id="link"
                                                name="link"
                                                placeholder="Verification Link"
                                                type="text"
                                                onChange={handleChange}
                                            />
                                            {touched.link && errors.link ? (
                                                <div className="error">*{errors.link}</div>
                                            ) : ("")
                                            }
                                        </Col>
                                    </FormGroup>

                                    <Button className="reset_button" color="info" onClick={handleSubmit}> submit</Button>
                                </Form>
                            </div>
                        )
                    }}
                </Formik>
            </Container>
        </div>
    )
}
