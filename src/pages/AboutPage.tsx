import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import { FullWidth } from '../components/FullWidth';
import { Card, CardDeck } from 'react-bootstrap';
import stock from '../assets/stockimage.jpg';
import valentina from '../assets/Valentina.png';
import richie from '../assets/Richie.jpg';
import nick from '../assets/Nick.jpg';
import laurie from '../assets/Laurie.jpg';
import jeff from '../assets/Jeff.jpg';
import gely from '../assets/Gely.jpg';
import francis from '../assets/Francis.jpg';
import elise from '../assets/Elise.jpg';

interface Props {}

const Header = styled.h1`
  font-size: 4rem;
`;

const Hierarchy = styled(CardDeck)`
  font-size: 2rem
  padding: 10vh 0 10vh 0;
  margin: 0
  color: #4287f5
`;

const Cards = styled(Card)`
  background: #4287f5
  text: white
  width: 18rem
`;

export const AboutPage: React.FC<Props> = ({}) => {
  return (
    <FullWidth>
      <Container>
        <CenterRow>
          <Header>About us</Header>
        </CenterRow>
        <p>
          The Dominican Student Association was first established at the University of Florida in 2000. 
          We are a welcoming club for all those interested in the Dominican Republic and who wish to make a difference in the lives of not only Dominican people but as many people as possible.
          DSA strives to create a community of Dominicans at the university. 
          DSA hosts monthly General Body Meetings and social events, and during the Spring semester, a full week is dedicated to celebrating Dominican Independence. 
          DSA also partakes in drives such as the holiday toy drive for kids in Haina, Dominican Republic and dance workshops with GatorSalsa.
        </p>
      </Container>
     
      <Container>
        <CenterRow>
          <Hierarchy style={{width: "60%", height: "60%"}}>
            <Card bg='danger' text='light' border='primary' >
              <Card.Img variant="top" src={valentina} />
              <Card.Body>
                <Card.Title>Valentina Litang</Card.Title>
                <Card.Text>President</Card.Text>
              </Card.Body>
            </Card>
          </Hierarchy>

          <Hierarchy style={{width: "60%", height: "60%"}}>
            <Card bg='primary' text='light' border='danger'>
              <Card.Img variant="top" src={francis} />
              <Card.Body>
                <Card.Title>Francis Rivas</Card.Title>
                <Card.Text>Vice-President</Card.Text>
              </Card.Body>
            </Card>
          </Hierarchy>
        </CenterRow>

        <Hierarchy>
          <Card bg='danger' text='light' border='primary'>
            <Card.Img variant="top" src={elise} />
            <Card.Body>
              <Card.Title>Elise Gonzalez</Card.Title>
              <Card.Text>Treasurer</Card.Text>
            </Card.Body>
          </Card>
          <Card bg='danger' text='light' border='primary' >
            <Card.Img variant="top" src={laurie} />
            <Card.Body>
              <Card.Title>Laurie Rodriguez</Card.Title>
              <Card.Text>Independence Week Director</Card.Text>
            </Card.Body>
          </Card>
        </Hierarchy>
        <Hierarchy>
          <Card bg='primary' text='light' border='danger' >
            <Card.Img variant="top" src={richie} />
            <Card.Body>
              <Card.Title>Ricardo Cordero</Card.Title>
              <Card.Text>PR Co-Director</Card.Text>
            </Card.Body>
          </Card>
          <Card bg='primary' text='light' border='danger' >
            <Card.Img variant="top" src={gely} />
            <Card.Body>
              <Card.Title>Gelybeth Rodriguez</Card.Title>
              <Card.Text>PR Co-Director</Card.Text>
            </Card.Body>
          </Card>
        </Hierarchy>  

        <Hierarchy>
          <Card bg='danger' text='light' border='primary' >
            <Card.Img variant="top" src={jeff} />
            <Card.Body>
              <Card.Title>Jeff Fondeuro</Card.Title>
              <Card.Text>Social Media Manager</Card.Text>
            </Card.Body>
          </Card>
          <Card bg='danger' text='light' border='primary' >
            <Card.Img variant="top" src={nick} />
            <Card.Body>
              <Card.Title>Nicholas Suriel</Card.Title>
              <Card.Text>Graphic Designer</Card.Text>
            </Card.Body>
          </Card>
        </Hierarchy>
      </Container>
    </FullWidth>
  );
};
