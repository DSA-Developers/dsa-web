import React from 'react';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';

interface Props {}

export const ContactPage: React.FC<Props> = ({}) => {
  return (
    <Container>
      <CenterRow>
        <h1>Contact Us Page</h1>
      </CenterRow>
    </Container>
  );
};
