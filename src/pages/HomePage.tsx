import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import Button from 'react-bootstrap/Button';

interface Props {}

const Title = styled.h1`
  font-family: Roboto;
`;

export const HomePage: React.FC<Props> = ({}) => {
  return (
    <Container>
      <CenterRow>
        <Title>Home Page</Title>
      </CenterRow>
      <CenterRow>
        <Button variant="primary">a random button</Button>
      </CenterRow>
    </Container>
  );
};
