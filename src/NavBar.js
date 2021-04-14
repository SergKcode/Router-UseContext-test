import React from 'react'
import { Button , Nav, Form, FormControl, Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>UseContext</Navbar.Brand>
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                    <Nav.Link exact activeClassName="active">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                    <Nav.Link exact activeClassName="active">About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                    <Nav.Link exact activeClassName="active">Login</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

        </>
    )
};
