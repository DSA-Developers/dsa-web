import React from 'react';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';

interface Props {}

export const AboutPage: React.FC<Props> = ({}) => {
  return (
    <Container>
      <CenterRow>
        <h1>About Us Page</h1>
      </CenterRow>
    </Container>
  );
};
