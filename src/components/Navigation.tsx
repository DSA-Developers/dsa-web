import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface Props {}

const StyledTitle = styled(Navbar.Text)`
  font-size: 1.5rem;
`;

export const Navigation: React.FC<Props> = ({}) => {
  return (
    <Navbar bg="light" variant="light" className="navbar border-bottom">
      <Navbar.Brand className="align-items-center" href="/home">
        <img
          src={Logo} //NOT WORKING
          width="60"
          height="60"
          className="d-inline-block"
          alt="DSA Logo"
        />
        <StyledTitle>Dominican Student Association</StyledTitle>
      </Navbar.Brand>
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
