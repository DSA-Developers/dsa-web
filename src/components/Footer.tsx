import React from 'react';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';

interface Props {}

export const Footer: React.FC<Props> = ({}) => {
  return (
    <Container className="bg-light">
      <CenterRow>hi</CenterRow>
    </Container>
  );
};
