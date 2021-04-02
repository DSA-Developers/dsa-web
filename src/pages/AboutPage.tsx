import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { MemberCard } from '../components/MemberCard';
import valentina from '../assets/Valentina.png';
import richie from '../assets/Richie.jpg';
import nick from '../assets/Nick.jpg';
import laurie from '../assets/Laurie.jpg';
import jeff from '../assets/Jeff.jpg';
import gely from '../assets/Gely.jpg';
import francis from '../assets/Francis.jpg';
import elise from '../assets/Elise.jpg';

interface Props {}

export const AboutPage: React.FC<Props> = ({}) => {
  const cardInfo1 = [
    { image: francis, title: 'Vice-President', text: 'Francis Rivas' },
    { image: elise, title: 'Treasurer', text: 'Elise Gonzalez' },
    { image: laurie, title: 'Independence Week Director', text: 'Laurie Rodriguez' },
    { image: richie, title: 'PR Co-Director', text: 'Ricardo Cordero' },
  ];

  const cards1 = cardInfo1.map((card) => <MemberCard name={card.text} position={card.title} fileName={card.image} />);

  const cardInfo2 = [
    { image: gely, title: 'PR Co-Director', text: 'Gelybeth Rodriguez' },
    { image: jeff, title: 'Social Media Manager', text: 'Jeff Fondeuro' },
    { image: nick, title: 'Graphic Designer', text: 'Nicholas Suriel' },
  ];

  const cards2 = cardInfo2.map((card) => <MemberCard name={card.text} position={card.title} fileName={card.image} />);

  return (
    <Container fluid>
      <DescriptionContainer>
        <Title>About us</Title>
        <Description>
          The Dominican Student Association was first established at the University of Florida in 2000. We are a
          welcoming club for all those interested in the Dominican Republic and who wish to make a difference in the
          lives of not only Dominican people but as many people as possible. DSA strives to create a community of
          Dominicans at the university. DSA hosts monthly General Body Meetings and social events, and during the Spring
          semester, a full week is dedicated to celebrating Dominican Independence. DSA also partakes in drives such as
          the holiday toy drive for kids in Haina, Dominican Republic and dance workshops with GatorSalsa.
        </Description>
      </DescriptionContainer>
      <MemberContainer>
        <Title>Executive Board</Title>
        <ParentAffiliation>
          <StyledCard>
            <Icon src={valentina} />
            <StyledTitle>
              <b>Valentina Litang</b>
            </StyledTitle>
            <StyledTitle>President</StyledTitle>
          </StyledCard>
        </ParentAffiliation>
        <Affiliations1>{cards1}</Affiliations1>
        <Affiliations2>{cards2}</Affiliations2>
      </MemberContainer>
    </Container>
  );
};

const DescriptionContainer = styled.div`
  padding: 20px 400px 50px 400px;
  background-color: #f8f9fb;
  textalign: 'center';
`;
const MemberContainer = styled.div`
  background-color: #fff;
  margin: -30px 0px 60px 0px;
`;

const Description = styled.h1`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-variant: normal;
  font-weight: 350;
  line-height: 40px;
  padding: 2% 3%;
  text-align: center;
`;

const Title = styled.div`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 700;
  padding: 4%;
  margin-bottom: -2%;
  text-align: center;
  background: -webkit-linear-gradient(0.5turn, #ce1126, #002d62);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ParentAffiliation = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0px 50px 30px;
`;

const Affiliations1 = styled.div`
  margin: 20px 0px 0px 70px;
  display: grid;
  grid-template-columns: repeat(4, 280px);
  justify-content: center;
`;
const Affiliations2 = styled.div`
  margin: 20px 0px 0px 70px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: center;
`;

const StyledCard = styled.div`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
const Icon = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-right: 30px;
`;

const StyledTitle = styled.h1`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 450;
  line-height: 10px;
  padding: 30px 30px 0px 0px;
  text-align: center;
`;
