import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer (){
    return (
        <footer className="footer">
            <Navbar  bg="light" variant="light">
        <Nav className="mr-auto">
            <p> &copy; Copyright store Front   </p>
            <p> contact us : <br/>
            ahmad@gmail.com
            </p>
        </Nav>
      </Navbar>
        </footer>
    )
}
export default Footer;