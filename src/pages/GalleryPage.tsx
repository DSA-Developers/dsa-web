import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import { Title } from '../components/Title';

import { storage } from '../firebase';

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

  const photos = photosURLs.map((url) => <img key={url} src={url} />);

  return (
    <Container>
      <CenterRow>
        <h1>Photo Gallery Page</h1>
        {/* {photos} */}
      </CenterRow>
    </Container>
  );
};
