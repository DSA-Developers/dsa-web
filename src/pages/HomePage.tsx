import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../placeholderCarousel1.jpg';
import CarouselImg2 from '../placeholderCarousel2.jpg';
import CarouselImg3 from '../placeholderCarousel3.jpg';
import { readBuilderProgram } from 'typescript';

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
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className='d-block w-100 h-100'
            src={CarouselImg1}
            alt="Image not found! - Slide 1"
            
          />
          <Carousel.Caption>
            <p>
            This is the caption for the first image
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className='d-block w-100 h-100'
            src={CarouselImg2}
            alt="Image not found! - Slide 2"
          />
          <Carousel.Caption>
            <p>
            This is the caption for the second image
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className='d-block w-100 h-100'
            src={CarouselImg3}
            alt="Image not found! - Slide 3"
          />
          <Carousel.Caption>
            <p>
            This is the caption for the third image
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CenterRow>
        <h1>
        About us:
        </h1>
        <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum elementum lorem. Quisque ac dapibus lacus, in sagittis leo. Praesent fermentum nec massa et imperdiet. Fusce sapien nisl, lacinia ut ante eu, laoreet elementum ex. Duis eget purus a dui pellentesque maximus. Aenean vel ultricies velit. Mauris scelerisque sapien dolor, a laoreet magna aliquet ut. Vestibulum nec dignissim tellus.
        Recusandae autem et ipsam. Saepe qui et repellat. Maxime distinctio non occaecati cum voluptates voluptatibus quo minima. Inventore facilis a accusantium quaerat ut quam quos. Enim qui porro nobis in qui ratione.
        Porro non maxime et porro veniam ut laudantium. Magni quidem non officiis eaque nobis quidem. Laboriosam doloremque quos eius. Maiores quia est explicabo nisi consectetur. Consectetur velit ducimus maiores iusto quia natus aliquid. Odio libero magnam praesentium accusantium pariatur quia perspiciatis incidunt.
        Provident consectetur quo nostrum veniam. Nam inventore ullam repellat soluta corrupti quam. Dolor quis aliquam exercitationem rerum iure placeat voluptatem.
        Id non rem reprehenderit dolor similique et. Et ut laborum velit incidunt. Ea excepturi et repudiandae. Rem culpa rerum dolores accusantium sed magnam facilis officia.
        Quaerat exercitationem minima dolor amet rerum nesciunt est occaecati. Labore quidem quae excepturi. Et praesentium quidem nihil quos.
        </h3>

        <h1>
        Follow us on these sites!
        </h1>

      </CenterRow>
    </Container>
  );
};
