import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface Props {}

export const Navigation: React.FC<Props> = ({}) => {
  return (
    //use for logo
    <Navbar className="bg-light justify-content-between sticky-top">
      <Navbar.Brand href="/home">
        <img
        src="placeholder.svg" //NOT WORKING
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="DSA Logo"
        />
        </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
