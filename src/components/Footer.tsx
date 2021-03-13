import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { CenterRow } from '../components/CenterRow';

import logoFb from '../assets/facebook.svg';
import logoInst from '../assets/instagram.svg';
import logoGroup from '../assets/groupme.svg';

interface Props {}

const StyledRow = styled(CenterRow)`
  height: fit-content;
  align-items: start;
  padding: 10vh 20% 10vh 20%;
`;

const StyledCol = styled(Col)`
  font-size: 1.5rem;
  flex-grow: 1;
  flex-shrink: 2;
  margin: 0 20px 0 20px;
  padding: 0;
  height: fit-content;
`;

const FullWidth = styled.div`
  bottom: 0;
  width: 100%;
  height: fit-content;
`;

const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 60px);
  gap: 20px;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5em 0;
  text-transform: uppercase;
`;

const SiteLink = styled(Nav.Link)`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.5);
  :hover {
    color: rgba(0, 0, 0, 0.7);
  }
  padding: 0 0 0.5em 0;
`;

export const Footer: React.FC<Props> = ({}) => {
  return (
    <FullWidth className="bg-light border-top text-secondary">
      <StyledRow>
        <StyledCol>
          <Header>Site Map</Header>
          <Nav className="flex-column">
            <SiteLink as={Link} to="/home">
              Home
            </SiteLink>
            <SiteLink as={Link} to="/about">
              About
            </SiteLink>
            <SiteLink as={Link} to="/gallery">
              Gallery
            </SiteLink>
            <SiteLink as={Link} to="/contact">
              Contact
            </SiteLink>
          </Nav>
        </StyledCol>
        <StyledCol>
          <Header>Connect</Header>
          <SocialMedia>
            <a href="https://www.facebook.com/DSAatUF">
              <Logo src={logoFb}></Logo>
            </a>
            <a href="https://www.instagram.com/uf.dsa/">
              <Logo src={logoInst}></Logo>
            </a>
            <a href="https://groupme.com/join_group/53205471/hXrFzndj">
              <Logo src={logoGroup}></Logo>
            </a>
          </SocialMedia>
        </StyledCol>
        <StyledCol>
          <Header>Contact Us</Header>
          <p>
            <b>Email</b>: dsaatuf@gmail.com
          </p>
        </StyledCol>
      </StyledRow>
    </FullWidth>
  );
};
