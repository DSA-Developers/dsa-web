import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import Gallery from 'react-photo-gallery';
import { SRLWrapper } from 'simple-react-lightbox';

import { MainContainer, Section } from '../components/Containers';

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
    setPhotos(urls);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return photos;
};

const GalleryPage: React.FC = ({}) => {
  const photosURLs = usePhotos();

  const photos = photosURLs.map((url) => ({ src: url, height: 15, width: 25}));

  return (
    <MainContainer fluid>
      <Section>
        <SRLWrapper>
          <Gallery photos={photos} />
        </SRLWrapper>
      </Section>
    </MainContainer>
  );
};

export default GalleryPage;
