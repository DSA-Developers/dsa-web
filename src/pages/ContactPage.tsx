import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

interface Props {}

const Header = styled.div`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 700;
  padding-bottom: 40px;
  background: -webkit-linear-gradient(0.5turn, #9c4c5c, #002d62);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MailingList = styled(Jumbotron)`
  padding: 20vh 0 20vh 0;
  font-size: 2rem;
  color: #343a40;
  margin: 0;
`;

export const ContactPage: React.FC<Props> = ({}) => {
  return (
    <MailingList>
      <Container>
        <Header>Mailing List</Header>
        <p>Join our mailing list to stay up to date!</p>
        <br />
        <Button variant="info" size="lg" href="http://eepurl.com/gRikBb" target="_blank">
          Subscribe
        </Button>
      </Container>
    </MailingList>
  );
};
