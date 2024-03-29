import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Logo from '../assets/logo.png';

const Navigation: React.FC = ({}) => {
  return (
    <StyledNavbar className="navbar border-bottom pl-5 pr-5 py-0">
      <Navbar.Brand className="align-items-center" href="/home">
        <img src={Logo} width="100" height="100" className="d-inline-block align-top" alt="DSA Logo" />
        <StyledTitle>DSA @ UF</StyledTitle>
      </Navbar.Brand>
      <StyledNav className="ml-auto">
        <StyledLink>
          <Nav.Link as={Link} to="/home">
            <Title>Home</Title>
          </Nav.Link>
        </StyledLink>
        <StyledLink>
          <Nav.Link as={Link} to="/about">
            <Title>About</Title>
          </Nav.Link>
        </StyledLink>
        <StyledLink>
          <Nav.Link as={Link} to="/gallery">
            <Title>Gallery</Title>
          </Nav.Link>
        </StyledLink>
        <StyledLink>
          <Nav.Link as={Link} to="/contact">
            <Title>Contact</Title>
          </Nav.Link>
        </StyledLink>
      </StyledNav>
    </StyledNavbar>
  );
};

export default Navigation;

const StyledTitle = styled(Navbar.Text)`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-style: normal;
  font-weight: 100;
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
const Title = styled.div`
  font-weight: 100;
`;
