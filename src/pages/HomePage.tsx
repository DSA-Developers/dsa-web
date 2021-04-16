import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import UFlogo from '../assets/UF logo.png';
import HSAlogo from '../assets/HSA Logo.png';
import GWlogo from '../assets/GatorWell.jpg';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../assets/DSACarousel.jpg';
import CarouselImg2 from '../assets/DSACarousel2.jpg';
import CarouselImg3 from '../assets/DSACarousel3.jpg';
import FacebookLogo from '../assets/facebook.svg';
import GroupMeLogo from '../assets/groupme.svg';
import InstagramLogo from '../assets/instagram.svg';
import HSALogo from '../assets/HispanicStudentLogo.png';
import ArSALogo from '../assets/ArgentineStudentsLogo.png';
import ATCLogo from '../assets/ArgentineTango.png';
import CASALogo from '../assets/CubanAmericanLogo.png';
import CALORLogo from '../assets/CentralAmericanLogo.png';
import GSCLogo from '../assets/GatorSalsaLogo.png';
import HCALogo from '../assets/HispanicCommunicatorsLogo.png';
import MASALogo from '../assets/MexicanStudentLogo.png';
import PASSLogo from '../assets/PeruvianAmericanLogo.png';
import PCLogo from '../assets/PorColombiaLogo.png';
import SLLogo from '../assets/SaborLatinoLogo.png';
import UEPALogo from '../assets/UnionDeEstudiantesLogo.png';
import VENSALogo from '../assets/VenezuelanStudentLogo.png';
import { OrganizationIcon } from '../components/OrganizationIcon';
import SocialMediaFeed from '../components/SocialMediaFeed';
import { Section } from '../components/Section';
import { Title } from '../components/Title';
import { Description } from '../components/Description';

interface Props {}

export const HomePage: React.FC<Props> = ({}) => {
  const clubInfo = [
    { link: 'https://www.ufhsa.com/argentina', photo: ArSALogo, text: 'Argentine Student Association' },
    { link: 'https://www.ufhsa.com/tango', photo: ATCLogo, text: 'Argentine Tango Club' },
    { link: 'https://www.ufhsa.com/cuba', photo: CASALogo, text: 'Cuban American Student Association' },
    { link: 'https://www.ufhsa.com/centralamerica', photo: CALORLogo, text: 'Central American Latino Organization' },
    { link: 'https://www.ufhsa.com/salsa', photo: GSCLogo, text: 'Gator Salsa Club' },
    {
      link: 'https://www.ufhsa.com/hispanic-communicators',
      photo: HCALogo,
      text: 'Hispanic Communicators Association',
    },
    { link: 'https://www.ufhsa.com/mexico', photo: MASALogo, text: 'Mexican-American Student Association' },
    { link: 'https://www.ufhsa.com/peru', photo: PASSLogo, text: 'Peruvian American Student Society' },
    { link: 'https://www.ufhsa.com/colombia', photo: PCLogo, text: 'Por Colombia' },
    { link: 'https://www.ufhsa.com/sabor-latino', photo: SLLogo, text: 'Sabor Latino' },
    {
      link: 'https://www.ufhsa.com/puertorico',
      photo: UEPALogo,
      text: 'La Union de Estudiantes Puertorriqueños Activos',
    },
    { link: 'https://www.ufhsa.com/venezuela', photo: VENSALogo, text: 'Venezuelan Student Association' },
  ];

  const clubs = clubInfo.map((club) => (
    <OrganizationIcon key={club.link} link={club.link} photo={club.photo} text={club.text} />
  ));

  const resourceInfo = [
    { link: 'https://www.ufhsa.com/campus-resources', photo: UFlogo, text: 'Campus Resources' },
    { link: 'https://www.ufhsa.com/hsa-resources', photo: HSAlogo, text: 'HSA Resources' },
    { link: 'https://www.ufhsa.com/mental-health-resources', photo: GWlogo, text: 'Mental Health' },
  ];

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

      <WhiteSection>
        <Title>Parent Organization</Title>
        <br />
        <StyledCard>
          <a href="https://www.ufhsa.com/" target="_blank" style={{ color: '#000' }}>
            <img src={HSALogo} />
            <Card.Title>
              <ParentTitle>Hispanic Student Association</ParentTitle>
            </Card.Title>
          </a>
        </StyledCard>
        <br />
        <Title>
          <h1>In Association With:</h1>
        </Title>
        <Affiliations>{clubs}</Affiliations>
      </WhiteSection>

      <Section>
        <Title>General Resources</Title>
        <br />
        <Resources>{resources}</Resources>
      </Section>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  margin: 0;
  padding: 0;
`;

const WhiteSection = styled(Section)`
  background: white;
`;

const ParentTitle = styled.h1`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-size: 27px;
  font-style: normal;
  font-weight: 100;
  line-height: 26.4px;
  padding: 5%;
  text-align: center;
`;

const MediaLogo = styled.div`
  transition: transform 0.2s;
`;

const StyledCard = styled.div`
  transition: transform 0.2s;
  max-width: 250px;
  &:hover {
    transform: scale(1.1);
  }
  margin-bottom: 50px;
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
  grid-gap: 30px;
`;

const MediaContainer = styled.div`
  padding: 20px 200px 50px 200px;
  background-color: #f8f9fb;
  width: 100%;
  justify-content: center;
`;

const Affiliations = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(3, 150px);
  column-gap: 100px;
  row-gap: 100px;
  text-align: center;
`;

const Resources = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  column-gap: 100px;
  row-gap: 100px;
  text-align: center;
`;

const CarouselImage = styled.img`
  width: 100vw;
  height: auto;
`;
