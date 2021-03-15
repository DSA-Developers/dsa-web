import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../assets/placeholderCarousel1.jpg';
import CarouselImg2 from '../assets/placeholderCarousel2.jpg';
import CarouselImg3 from '../assets/placeholderCarousel3.jpg';
import DSAMemberPhoto from '../assets/DSA Members.png';
import FacebookLogo from '../assets/facebook.svg';
import GroupMeLogo from '../assets/groupme.svg';
import InstagramLogo from '../assets/instagram.svg';
import { readBuilderProgram } from 'typescript';

interface Props {}

const Title = styled.h1`
  font-family: Roboto;
  justify-content: center;
  display: flex;
  padding: 20px 0px 0px 0px;
`;

const Body = styled.p`
  justify-content: center;
  display:flex;
  padding: 20px 0px 20px 0px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const SocialMediaContainer = styled.div`
  padding: 20px 0px 20px 0px;
  background-color: #eee;
  justify-content: center;
  display: flex;
`;

const CarouselContainer = styled.div`
  padding: 20px 0px 20px 0px;
  justify-content: center;
  display: flex;
`;

const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-gap: 0px;
`;

const CarouselImage = styled.img`
  width: 1100px;
  height: 600px;
`;

export const HomePage: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Title>Welcome to the DSA at UF!</Title>
      <CarouselContainer>
      <Carousel>
        <Carousel.Item interval={5000}>
          <CarouselImage
            src={DSAMemberPhoto}
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CarouselImage
            src={CarouselImg2}
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CarouselImage
            src={CarouselImg3}
          />
        </Carousel.Item>
      </Carousel>
      </CarouselContainer>
      <Body>
        <h2>
        ¡¿Que lo que?! Welcome to the Dominican Student Association at the University of Florida! Join
        our GroupMe or follow us on Instagram or Facebook for event information, memes, and
        friendship!
        </h2>
        </Body>
        <SocialMediaContainer>
          <h1>
          Find us here as well:
          </h1>
        </SocialMediaContainer>
        <SocialMediaContainer>
        <SocialMedia>
          <Col>
            <a href='https://www.facebook.com/DSAatUF'>
              <Icon src={FacebookLogo}></Icon>
            </a>
          </Col>
          <Col>
            <a href='https://www.instagram.com/uf.dsa/'>
              <Icon src={InstagramLogo}></Icon>
            </a>
          </Col>
          <Col>
            <a href='https://groupme.com/join_group/53205471/hXrFzndj'>
              <Icon src={GroupMeLogo}></Icon>
            </a>
          </Col>
        </SocialMedia></SocialMediaContainer>
        <Body>
          <h1>Highlights from our pages:</h1>
        </Body>

    </Container>
  );
};
