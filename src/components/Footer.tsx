import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import { CenterRow } from '../components/CenterRow';

import logoFb from '../assets/facebook.svg';
import logoInst from '../assets/instagram.svg';
import logoGroup from '../assets/groupme.svg';

interface Props {}

const StyledRow = styled(CenterRow)`
  height: 30vh;
  align-items: center;
  padding: 0 20px 0 20px;
`;

const StyledCol = styled(Col)`
  flex-grow: 1;
  flex-shrink: 2;
  margin: 0 20px 0 20px;
`;

const FullWidth = styled.div`
  bottom: 0;
  width: 100%;
  height: fit-content;
`;

const SocialMedia = styled(StyledCol)`
  display: flex;
  justify-content: space-evenly;
  padding: 0 20px 0 20px;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const Footer: React.FC<Props> = ({}) => {
  return (
    <FullWidth className="bg-light border-top">
      <StyledRow>
        <StyledCol>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius facilisis eros. Sed ac venenatis
          dolor. Maecenas condimentum hendrerit lectus a euismod. Aenean lacinia volutpat mauris, eget posuere velit
          aliquam vel. Praesent consequat, mauris sit amet cursus auctor, nibh quam pulvinar lorem, non posuere velit
          orci quis metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          Fusce eget gravida lacus.
        </StyledCol>
        <SocialMedia>
          <Logo src={logoFb}></Logo>
          <Logo src={logoInst}></Logo>
          <Logo src={logoGroup}></Logo>
        </SocialMedia>
        <StyledCol>
          <p>Contact Us</p>
          <p>Email: dsaatuf@gmail.com</p>
        </StyledCol>
      </StyledRow>
    </FullWidth>
  );
};
