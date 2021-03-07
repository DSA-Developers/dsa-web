import React from 'react';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';

interface Props {}

export const GalleryPage: React.FC<Props> = ({}) => {
  return (
    <Container>
      <CenterRow>
        <h1>Photo Gallery Page</h1>
      </CenterRow>
    </Container>
  );
};
