import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import MovieSearch from "./MovieSearch";

class NavbarNet extends React.Component {
    render() {
        return (
            <Navbar expand="lg">
                <Navbar.Brand href="#">
                    <img
                        src="/assets/logo.png"
                        width="100"
                        height="55"
                        className="d-inline-block align-top"
                        alt="Netflix Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#" className="text-white" >Home</Nav.Link>
                        <Nav.Link href="#" className="text-white">TV Shows</Nav.Link>
                        <Nav.Link href="#" className="text-white">Movies</Nav.Link>
                        <Nav.Link href="#" className="text-white">Recently Added</Nav.Link>
                        <Nav.Link href="#" className="text-white">My List</Nav.Link>
                    </Nav>
                        <Nav.Link className="text-white">KIDS</Nav.Link>
                        <FontAwesomeIcon icon={faBell} className="icons text-white" />
                        <FontAwesomeIcon icon={faUser} className="icons text-white" />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarNet;