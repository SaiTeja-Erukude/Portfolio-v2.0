import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useSearchParams } from "react-router-dom";

const Header = () => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ loggedIn, setLoggedIn ] = useState( sessionStorage.getItem( "loggedIn" ) );
    const navigate = useNavigate();

    useEffect( () => {
        if ( sessionStorage.getItem( "loggedIn" ) === "true" || searchParams.get( "redirect" ) === "home" )
            setLoggedIn( true );
        else
            setLoggedIn( false );
    }, [ loggedIn, searchParams ] );

    const logoutHandler = () => {
        setLoggedIn( false );
        sessionStorage.removeItem( "loggedIn" );
        navigate( "/admin/login" );
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className="title">SOFTWARE DEVELOPER</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto p-1">
                        <LinkContainer to="/">
                            <Nav.Link className="mx-3">HOME</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/skills">
                            <Nav.Link className="mx-3">SKILLS</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/experiences">
                            <Nav.Link className="mx-3">EXPERIENCES</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                            <Nav.Link className="mx-3">PROJECTS</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/certifications">
                            <Nav.Link className="mx-3">CERTIFICATIONS</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        { !loggedIn &&
                            <LinkContainer to="/admin/login" >
                                <Nav.Link className="mx-3"><i class="fa-solid fa-screwdriver-wrench"></i>&nbsp;ADMIN LOGIN</Nav.Link>
                            </LinkContainer> }
                        { loggedIn &&
                            <Nav.Link onClick={ logoutHandler } className="mx-3"><i class="fa-solid fa-right-from-bracket"></i>&nbsp;LOGOUT</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;