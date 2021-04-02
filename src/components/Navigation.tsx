import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface Props {}

const StyledTitle = styled(Navbar.Text)`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  margin: 0 0 0 0.5em;
  font-size: 3rem;
`;

const StyledNav = styled(Nav)`
  font-size: 2rem;
`;

const StyledNavbar = styled(Navbar)`
  background: -webkit-linear-gradient(90deg, #c7daea, #f8f9fb);
`;

const StyledLink = styled(Nav.Item)`
  margin: 0 1em 0 0;
  text-transform: uppercase;
`;

export const Navigation: React.FC<Props> = ({}) => {
  return (
    <StyledNavbar className="navbar border-bottom pl-5 pr-5">
      <Navbar.Brand className="align-items-center" href="/home">
        <img src={Logo} width="80" height="80" className="d-inline-block align-top" alt="DSA Logo" />
        <StyledTitle>
          <b>DSA</b> @ UF
        </StyledTitle>
      </Navbar.Brand>
      <StyledNav className="ml-auto">
        <StyledLink>
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
        </StyledLink>
        <StyledLink>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </StyledLink>
        <StyledLink>
          <Nav.Link as={Link} to="/gallery">
            Gallery
          </Nav.Link>
        </StyledLink>
        <StyledLink>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </StyledLink>
      </StyledNav>
    </StyledNavbar>
  );
};
