import React from 'react';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import { Title } from '../components/Title';

interface Props {}

export const GalleryPage: React.FC<Props> = ({}) => {
  return (
    <Container>
      <CenterRow>
        <Title>Photo Gallery Page</Title>
      </CenterRow>
    </Container>
  );
};
