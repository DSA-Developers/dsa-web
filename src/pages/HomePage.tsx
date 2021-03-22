import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import UFlogo from '../assets/UF logo.png';
import HSAlogo from '../assets/HSA Logo.png';
import GWlogo from '../assets/GatorWell.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../assets/DSA Carousel.jpeg';
import CarouselImg2 from '../assets/DSA Carousel2.jpg';
import CarouselImg3 from '../assets/DSA Carousel3.jpg';
import DSAMemberPhoto from '../assets/DSA Members.png';
import FacebookLogo from '../assets/facebook.svg';
import GroupMeLogo from '../assets/groupme.svg';
import InstagramLogo from '../assets/instagram.svg';
import DSALogo from '../assets/logo.png';
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
import { readBuilderProgram } from 'typescript';

interface Props {}

const Title = styled.h1`
  font-family: Roboto;
  padding: 5%;
  text-align: center;
`;
const StyledCard = styled.div`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Body = styled.p`
  justify-content: center;
  display: flex;
  padding: 20px 0px 20px 0px;
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

const ParentAffiliation = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 150px);
`;

const Affiliations = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 150px);
`;

const AffiliationsText = styled.p`
  justify-content: center;
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
            src={CarouselImg1}
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
        <Title>
          ¡¿Que lo que?! Welcome to the Dominican Student Association at the University of Florida! Join our GroupMe or
          follow us on Instagram or Facebook for event information, memes, and friendship!
        </Title>
      </Body>
      <SocialMediaContainer>
        <h1>Find us here as well:</h1>
      </SocialMediaContainer>
      <SocialMediaContainer>
        <SocialMedia>
          <Col>
            <a href="https://www.facebook.com/DSAatUF">
              <Icon src={FacebookLogo}></Icon>
            </a>
          </Col>
          <Col>
            <a href="https://www.instagram.com/uf.dsa/">
              <Icon src={InstagramLogo}></Icon>
            </a>
          </Col>
          <Col>
            <a href="https://groupme.com/join_group/53205471/hXrFzndj">
              <Icon src={GroupMeLogo}></Icon>
            </a>
          </Col>
        </SocialMedia>
      </SocialMediaContainer>
      <Body></Body>
      <SocialMediaContainer>
        <Body>
          <h1>Parent Organization:</h1>
        </Body>
      </SocialMediaContainer>
      <SocialMediaContainer>
        <ParentAffiliation>
          <Col>
            <a href="https://www.ufhsa.com/">
              <Icon src={HSALogo}></Icon>
            </a>
            <AffiliationsText>Hispanic Student Association</AffiliationsText>
          </Col>
        </ParentAffiliation>
      </SocialMediaContainer>
      <SocialMediaContainer>
        <Body>
          <h1>In Association With:</h1>
        </Body>
      </SocialMediaContainer>
      <SocialMediaContainer>
        <Affiliations>
          <Col>
            <a href="https://www.ufhsa.com/argentina">
              <Icon src={ArSALogo}></Icon>
            </a>
            <AffiliationsText>Argentine Student Association</AffiliationsText>
          </Col>
          <Col>
            <a href="https://www.ufhsa.com/tango">
              <Icon src={ATCLogo}></Icon>
            </a>
            <AffiliationsText>Argentine Tango Club</AffiliationsText>
          </Col>
          <Col>
            <a href="https://www.ufhsa.com/cuba">
              <Icon src={CASALogo}></Icon>
            </a>
            <AffiliationsText>Cuban American Student Association</AffiliationsText>
          </Col>
          <Col>
            <a href="https://www.ufhsa.com/centralamerica">
              <Icon src={CALORLogo}></Icon>
            </a>
            <AffiliationsText>Central American Latino Organization</AffiliationsText>
          </Col>
          <Col>
            <a href="https://www.ufhsa.com/salsa">
              <Icon src={GSCLogo}></Icon>
            </a>
            <AffiliationsText>Gator Salsa Club</AffiliationsText>
          </Col>
          <Col>
            <a href="https://www.ufhsa.com/hispanic-communicators">
              <Icon src={HCALogo}></Icon>
            </a>
            <AffiliationsText>Hispanic Communicators Association</AffiliationsText>
          </Col>
          <Col>
            <a href="https://www.ufhsa.com/mexico">
              <Icon src={MASALogo}></Icon>
            </a>
            <AffiliationsText>Mexican-American Student Association</AffiliationsText>
          </Col>
          <Col>
            <a href="https://www.ufhsa.com/peru">
              <Icon src={PASSLogo}></Icon>
            </a>
            <AffiliationsText>Peruvian American Student Society</AffiliationsText>
          </Col>
          <Col>
            <a href="https://www.ufhsa.com/colombia">
              <Icon src={PCLogo}></Icon>
            </a>
            <AffiliationsText>Por Colombia</AffiliationsText>
          </Col>
          <Col>
            <a href="https://www.ufhsa.com/sabor-latino">
              <Icon src={CarouselImg1}></Icon>
            </a>
            <AffiliationsText>Sabor Latino</AffiliationsText>
          </Col>
          <Col>
            <a href="https://www.ufhsa.com/puertorico">
              <Icon src={UEPALogo}></Icon>
            </a>
            <AffiliationsText>La Union de Estudiantes Puertorriqueños Activos</AffiliationsText>
          </Col>
          <Col>
            <a href="https://www.ufhsa.com/venezuela">
              <Icon src={VENSALogo}></Icon>
            </a>
            <AffiliationsText>Venezuelan Student Association</AffiliationsText>
          </Col>
        </Affiliations>
      </SocialMediaContainer>

      <SocialMediaContainer>
        <Title>Resources</Title>
      </SocialMediaContainer>

      <SocialMediaContainer>
        <Col>
          <StyledCard>
            <a href="https://www.ufhsa.com/campus-resources" target="_blank">
              <Card style={{ width: '15rem', height: '15rem' }} bg="light">
                <Image src={UFlogo} style={{ padding: '5%', maxWidth: '100%', margin: 'auto' }} />
              </Card>
            </a>
            <Card.Title style={{ padding: '2rem 1rem', fontSize: '25px' }}>Campus Resources</Card.Title>
          </StyledCard>
        </Col>
        <Col>
          <StyledCard>
            <a href="https://www.ufhsa.com/hsa-resources" target="_blank">
              <Card style={{ width: '15rem', height: '15rem' }} bg="light">
                <Image src={HSAlogo} style={{}} />
              </Card>
            </a>
            <Card.Title style={{ padding: '2rem 2rem', fontSize: '25px' }}>HSA Resources</Card.Title>
          </StyledCard>
        </Col>
        <Col>
          <StyledCard>
            <a href="https://www.ufhsa.com/mental-health-resources" target="_blank">
              <Card style={{ width: '15rem', height: '15rem' }} bg="light">
                <Image src={GWlogo} style={{ padding: '5%' }} />
              </Card>
            </a>
            <Card.Title style={{ padding: '2rem 2rem', fontSize: '25px' }}>Mental Health</Card.Title>
          </StyledCard>
        </Col>
      </SocialMediaContainer>

      <Body></Body>
    </Container>
  );
};
