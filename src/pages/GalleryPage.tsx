import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import { Title } from '../components/Title';
import { storage } from '../firebase';
import Gallery from 'react-photo-gallery';
import { SRLWrapper } from 'simple-react-lightbox';

interface Props {}

const photosRef = storage.ref().child('photos');

const usePhotos = () => {
  const [photos, setPhotos] = useState<Array<string>>([]);

  const fetchPhotos = async () => {
    let requests: Array<Promise<any>> = [];
    const list = await photosRef.listAll();
    list.items.forEach((itemRef) => {
      requests.push(itemRef.getDownloadURL());
    });
    const urls: Array<string> = await Promise.all(requests);
    console.log(urls);
    setPhotos(urls);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return photos;
};

export const GalleryPage: React.FC<Props> = ({}) => {
  const photosURLs = usePhotos();

  const photos = photosURLs.map((url) => ({ src: url, height: 7, width: 10 }));

  return (
    <>
      <StyledContainer fluid>
        <CenterRow>
          <Title>Photo Gallery</Title>
          <SRLWrapper>
            <Gallery photos={photos} />
          </SRLWrapper>
          <Title></Title>
        </CenterRow>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled(Container)`
  background-color: #f8f9fb;
  padding: 0 10% 0 10%;
`;
