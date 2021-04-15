import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { FullWidth } from '../components/FullWidth';
import Newsletter from '../assets/DRflag.jpg';

interface Props {}

const Header = styled.div`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 700;
  color: white;
  text-align: center;
`;

const MailingList = styled(Jumbotron)`
  padding: 20vh 0 20vh 0;
  font-size: 2rem;
  color: #343a40;
  margin: 0;
  background-image: url(${Newsletter});
  background-position: center;
  background-size: 3840px 2600px;
  background-repeat: no-repeat;
`;
const StyledButton = styled(Button)`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 500;
  font-size: 30px;
  margin-top: 40px;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
`;
const StyledContainer = styled(Container)`
  background-color: #002d62;
  padding: 25px 75px;
  border-radius: 100px;
  margin-bottom: 60px;
  height: 350px;
`;

export const ContactPage: React.FC<Props> = ({}) => {
  return (
    <FullWidth>
      <MailingList>
        <StyledContainer>
          <Header>Mailing List</Header>
          <p style={{ color: 'white', textAlign: 'center', marginTop: '40px' }}>
            Subscribe to stay up to date with the latest club news!
          </p>
          <StyledButton variant="danger" size="lg" href="http://eepurl.com/gRikBb" target="_blank">
            Subscribe
          </StyledButton>
        </StyledContainer>
      </MailingList>
    </FullWidth>
  );
};
