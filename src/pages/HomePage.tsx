import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

import { MainContainer, Section, WhiteSection, Description } from '../components/Containers';
import Title from '../components/Title';
import OrganizationIcon from '../components/OrganizationIcon';
import SocialMediaFeed from '../components/SocialMediaFeed';
import AffiliationsGrid from '../components/Affiliations';

import CarouselImg1 from '../assets/DSACarousel.jpg';
import CarouselImg2 from '../assets/DSACarousel2.jpg';
import CarouselImg3 from '../assets/DSACarousel3.jpg';

import FacebookLogo from '../assets/facebook.svg';
import GroupMeLogo from '../assets/groupme.svg';
import InstagramLogo from '../assets/instagram.svg';

import UFlogo from '../assets/UF logo.png';
import HSAlogo from '../assets/HSA Logo.png';
import GWlogo from '../assets/GatorWell.jpg';

const resourceInfo = [
  { link: 'https://www.ufhsa.com/campus-resources', photo: UFlogo, text: 'Campus Resources' },
  { link: 'https://www.ufhsa.com/hsa-resources', photo: HSAlogo, text: 'HSA Resources' },
  { link: 'https://www.ufhsa.com/mental-health-resources', photo: GWlogo, text: 'Mental Health' },
];

const HomePage: React.FC = ({}) => {

  const resources = resourceInfo.map((club) => (
    <OrganizationIcon key={club.link} link={club.link} photo={club.photo} text={club.text} />
  ));

  return (
    <MainContainer fluid>
      <CarouselContainer>
        <Carousel>
          <Carousel.Item interval={3500}>
            <CarouselImage className="d-block mw-100" src={CarouselImg1} />
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <CarouselImage className="d-block mw-100" src={CarouselImg2} />
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <CarouselImage className="d-block mw-100" src={CarouselImg3} />
          </Carousel.Item>
        </Carousel>
      </CarouselContainer>

      <Section>
        <Title>Welcome to the Dominican Student Association at UF!</Title>
        <Description>
          ¡¿Que lo que?! Welcome to the Dominican Student Association at the University of Florida! Join our GroupMe or
          follow us on Instagram or Facebook for event information, memes, and friendship!
        </Description>
      </Section>

      <SocialMedia>
        <MediaLogo>
          <a href="https://www.facebook.com/DSAatUF" target="_blank" title="Facebook">
            <Icon src={FacebookLogo}></Icon>
          </a>
        </MediaLogo>
        <MediaLogo>
          <a href="https://www.instagram.com/uf.dsa/" target="_blank" title="Instagram">
            <Icon src={InstagramLogo}></Icon>
          </a>
        </MediaLogo>
        <MediaLogo>
          <a href="https://groupme.com/join_group/53205471/hXrFzndj" target="_blank" title="GroupMe">
            <Icon src={GroupMeLogo}></Icon>
          </a>
        </MediaLogo>
      </SocialMedia>

      <MediaContainer>
        <Title>Check us out on Instagram!</Title>
        <br />
        <SocialMediaFeed />
      </MediaContainer>

      <AffiliationsGrid />

      <Section>
        <Title>General Resources</Title>
        <br />
        <Resources>{resources}</Resources>
      </Section>
    </MainContainer>
  );
};

export default HomePage;

const MediaLogo = styled.div`
  &:hover {
    transform: scale(1.2);
    transition-duration: 0.2s;
  }
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 25px;
`;

const CarouselContainer = styled.div`
  padding: 0px 0px 0px 0px;
  width: 100%;
  justify-content: center;
  display: flex;
`;

const SocialMedia = styled(WhiteSection)`
  justify-content: center;
  display: flex;
  flex-direction: row;
  grid-template-columns: repeat(3, 150px);
  grid-gap: 50px;
`;

const MediaContainer = styled.div`
  padding: 5% 200px 5% 200px;
  background-color: #f8f9fb;
  width: 100%;
  justify-content: center;
`;
const Resources = styled.div`
  padding-top: 3%;
  display: grid;
  grid-template-columns: repeat(3, 150px);
  column-gap: 125px;
  row-gap: 100px;
  text-align: center;
`;

const CarouselImage = styled.img`
  width: 100vw;
  height: auto;
`;
