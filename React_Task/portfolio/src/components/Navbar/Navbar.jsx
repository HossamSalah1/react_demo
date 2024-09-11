import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class Navbar2 extends Component {
    constructor() {
        super()
    }
    render() {

        return <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <a>
                        <Navbar.Brand>Portfolio</Navbar.Brand>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/About">About</Nav.Link>
                            
                            <Nav.Link href="/movies">Movies</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    }

}