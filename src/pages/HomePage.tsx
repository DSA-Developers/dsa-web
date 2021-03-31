import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import UFlogo from '../assets/UF logo.png';
import HSAlogo from '../assets/HSA Logo.png';
import GWlogo from '../assets/GatorWell.jpg';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../assets/DSA Carousel.jpeg';
import CarouselImg2 from '../assets/DSA Carousel2.jpg';
import CarouselImg3 from '../assets/DSA Carousel3.jpg';
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

interface Props {}

const Title = styled.h1`
  font-family: Roboto;
  padding: 5%;
  text-align: center;
`;
const StyledCard = styled.div`
  transition: transform 0.2s;
  max-width: 200px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Body = styled.p`
  justify-content: center;
  display: flex;
  padding: 20px 20px 20px 0px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 25px;
`;

const SocialMediaContainer = styled.div`
  padding: 20px 0px 20px 0px;
  background-color: #eee;
  width: 100%;
  justify-content: center;
  display: grid;
  margin: 50px 0px;
`;

const CarouselContainer = styled.div`
  padding: 20px 0px 20px 0px;
  justify-content: center;
  display: flex;
`;

const SocialMedia = styled.div`
  padding: 20px 0px 20px 0px;
  background-color: #eee;
  width: 100%;
  justify-content: center;
  margin: 50px 0px;
  display: flex;
  grid-template-columns: repeat(3, 150px);
  grid-gap: 30px;
`;

const ParentAffiliation = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

const Affiliations = styled.div`
  margin: 25px;
  display: grid;
  grid-template-columns: repeat(6, 150px);
  box-sizing: border-box;
  width: 850px;
  height: 10%;
`;
const Resources = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(3, 150px);
`;

const CarouselImage = styled.img`
  width: 1100px;
  height: 600px;
`;

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

  const clubs = clubInfo.map((club) => <OrganizationIcon link={club.link} photo={club.photo} text={club.text} />);

  const resourceInfo = [
    { link: 'https://www.ufhsa.com/campus-resources', photo: UFlogo, text: 'Campus Resources' },
    { link: 'https://www.ufhsa.com/hsa-resources', photo: HSAlogo, text: 'HSA Resources' },
    { link: 'https://www.ufhsa.com/mental-health-resources', photo: GWlogo, text: 'Mental Health' },
  ];

  const resources = resourceInfo.map((club) => (
    <OrganizationIcon link={club.link} photo={club.photo} text={club.text} />
  ));

  return (
    <Container>
      <Title>Welcome to the DSA at UF!</Title>
      <CarouselContainer>
        <Carousel>
          <Carousel.Item interval={4000}>
            <CarouselImage src={CarouselImg1} />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <CarouselImage src={CarouselImg2} />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <CarouselImage src={CarouselImg3} />
          </Carousel.Item>
        </Carousel>
      </CarouselContainer>

      <Title>
        ¡¿Que lo que?! Welcome to the Dominican Student Association at the University of Florida! Join our GroupMe or
        follow us on Instagram or Facebook for event information, memes, and friendship!
      </Title>

      <SocialMedia>
        <Body>
          <h1>Find us here as well:</h1>
        </Body>

        <StyledCard>
          <a href="https://www.facebook.com/DSAatUF" title="Facebook">
            <Icon src={FacebookLogo}></Icon>
          </a>
        </StyledCard>

        <StyledCard>
          <a href="https://www.instagram.com/uf.dsa/" title="Instagram">
            <Icon src={InstagramLogo}></Icon>
          </a>
        </StyledCard>

        <StyledCard>
          <a href="https://groupme.com/join_group/53205471/hXrFzndj" title="GroupMe">
            <Icon src={GroupMeLogo}></Icon>
          </a>
        </StyledCard>
      </SocialMedia>

      <SocialMediaContainer>
        <Body>
          <h1>Parent Organization:</h1>
        </Body>

        <ParentAffiliation>
          <StyledCard>
            <a href="https://www.ufhsa.com/" target="_blank" style={{ color: '#000' }}>
              <img src={HSALogo} />

              <Card.Title style={{ paddingTop: '20px', textAlign: 'center', fontSize: '26px' }}>
                Hispanic Student Association
              </Card.Title>
            </a>
          </StyledCard>
        </ParentAffiliation>
        <br />
        <Body>
          <h1>In Association With:</h1>
        </Body>
        <Affiliations>{clubs}</Affiliations>
      </SocialMediaContainer>

      <SocialMediaContainer>
        <Body>
          <h1>Resources</h1>
        </Body>

        <Resources>{resources}</Resources>
      </SocialMediaContainer>
    </Container>
  );
};
