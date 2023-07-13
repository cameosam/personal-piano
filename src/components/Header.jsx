import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar variant="dark" className="ps-3">
      <Navbar.Brand href="/">personal piano</Navbar.Brand>
      <Nav>
        <Nav.Link href="/freeplay">freeplay</Nav.Link>
        <Nav.Link href="/game">game</Nav.Link>
        <Nav.Link href="/learn">learn</Nav.Link>
      </Nav>
    </Navbar>
  );
}
