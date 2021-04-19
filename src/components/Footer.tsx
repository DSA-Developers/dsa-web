import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FullWidth } from './Containers';

import logoFb from '../assets/facebook.svg';
import logoInst from '../assets/instagram.svg';
import logoGroup from '../assets/groupme.svg';
import DevLogo from '../assets/Dev_Logo.png';

const Footer: React.FC = ({}) => {
  return (
    <FullWidth className="bg-light border-top text-secondary" style={{ position: 'relative' }}>
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
            <a href="https://www.facebook.com/DSAatUF" target="_blank">
              <Logo src={logoFb}></Logo>
            </a>
            <a href="https://www.instagram.com/uf.dsa/" target="_blank">
              <Logo src={logoInst}></Logo>
            </a>
            <a href="https://groupme.com/join_group/53205471/hXrFzndj" target="_blank">
              <Logo src={logoGroup}></Logo>
            </a>
          </SocialMedia>
        </StyledCol>
        <StyledCol>
          <Header>Contact Us</Header>
          <p>Email: dsaatuf@gmail.com</p>
        </StyledCol>
      </StyledRow>
      <Credits>
        {/* <img src={DevLogo} style={{ width: '8%', height: 'auto' }} /> */}
        <DevelopedBy>
          <em>&ensp;Made with ♥ by DSA Developers</em>
        </DevelopedBy>
      </Credits>
    </FullWidth>
  );
};

export default Footer;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  height: fit-content;
  align-items: start;
  margin: 0;
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

const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 60px);
  gap: 10px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5em 0;
  font-weight: 100;
  text-transform: uppercase;
`;

const SiteLink = styled(Nav.Link)`
  font-size: 1.5rem;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.5);
  :hover {
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
  }
  padding: 0 0 0.5em 0;
`;

const Credits = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const DevelopedBy = styled.p`
  position: relative;
  font-size: 25px;
  font-weight: 100;
  &:before {
    content: '';
    position: absolute;
    left: -60px;
    bottom: -20%;
    display: block;
    width: 60px;
    height: 55px;
    background-image: url(${DevLogo});
    background-size: contain;
  }
`;
