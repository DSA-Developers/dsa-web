import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface Props {}

export const Navigation: React.FC<Props> = ({}) => {
  return (
    <Navbar bg="light" variant="light" className="navbar border-bottom">
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/gallery">
            Gallery
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
