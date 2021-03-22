import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { FullWidth } from '../components/FullWidth';

import database from '../firebase';

console.log(database);


interface Props {}

const Header = styled.h1`
  font-size: 4rem;
`;

const MailingList = styled(Jumbotron)`
  padding: 20vh 0 20vh 0;
  font-size: 2rem;
  color: #343a40;
  margin: 0;
`;

export const ContactPage: React.FC<Props> = ({}) => {
  return (
    <FullWidth>
      <MailingList fluid>
        <Container>
          <Header>Mailing List</Header>
          <p>Join our mailing list to stay up to date!</p>
          <Button variant="dark" size="lg" href="http://eepurl.com/gRikBb">
            Subscribe
          </Button>
        </Container>
      </MailingList>
      <Button
        onClick={() => {
          database.ref('test').push('test message');
        }}
      ></Button>
    </FullWidth>
  );
};
