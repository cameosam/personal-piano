import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default function Header() {
    return (
        <Navbar variant='dark'>
        <LinkContainer to='/'><Navbar.Brand>personal piano</Navbar.Brand></LinkContainer>
            <Nav className='ml-auto'>
                <LinkContainer to='/freeplay'><Nav.Link>freeplay</Nav.Link></LinkContainer>
                <LinkContainer to='/game'><Nav.Link>game</Nav.Link></LinkContainer>
                <LinkContainer to='/learn'><Nav.Link>learn</Nav.Link></LinkContainer>
            </Nav>
        </Navbar>
    );
}