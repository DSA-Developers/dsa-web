import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

interface Props {}

const Container = styled.div`
  position: relative;
  top: 10vh;
  width: 100%;
  height: fit-content;
  text-align: center;
`;

const Title = styled.h1`
  font-family: Roboto;
`;

export const HomePage: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Title>Home Page</Title>
      <Button variant="primary">a random button</Button>
    </Container>
  );
};
