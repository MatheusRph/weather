"use client"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from "react-bootstrap/InputGroup";


export default function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-transparent p-0 border-bottom">
            <Container fluid>
                <Navbar.Brand href="/" className='p-0 m-0'>
                    <img
                        src="/icon.webp"
                        width="100px"
                        height="100px"
                        className="d-inline-block align-center"
                        alt="Site Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <InputGroup className="custom-search" style={{ maxWidth: "280px" }}>
                        <InputGroup.Text className="search-icon">
                            <i className="bi bi-search"></i>
                        </InputGroup.Text>
                        <Form.Control
                            type="search"
                            placeholder="Search cities..."
                            aria-label="Search"
                            className="search-input"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    console.log("Buscando:", e.target.value);
                                }
                            }}
                        />
                    </InputGroup>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}