import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
export default function Home(){
    return(
        <Container>
<h3>user login system</h3>
<Link to="/login">login page</Link><br></br>
<Link to="/signup">signup page</Link><br></br>
<Link to="/forgotpassword">forgot page</Link><br></br>
<Link to="/verification">verification page</Link><br></br>
</Container>
    )
}