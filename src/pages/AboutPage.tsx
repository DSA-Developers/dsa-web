import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import { FullWidth } from '../components/FullWidth';
import { Card, CardDeck } from 'react-bootstrap';
import { MemberCard } from '../components/MemberCard';
import valentina from '../assets/Valentina.png';
import richie from '../assets/Richie.jpg';
import nick from '../assets/Nick.jpg';
import laurie from '../assets/Laurie.jpg';
import jeff from '../assets/Jeff.jpg';
import gely from '../assets/Gely.jpg';
import francis from '../assets/Francis.jpg';
import elise from '../assets/Elise.jpg';

import { database, storage } from '../firebase';

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

const storageRef = storage.ref();
const membersRef = database.ref('members/');

membersRef.on('value', (snapshot: any) => {
  snapshot.forEach((member: any) => {
    console.log(member.val().name, member.val().role);
    storageRef
      .child('members/' + member.val().photo)
      .getDownloadURL()
      .then((res: any) => {
        console.log(res);
      });
  });
});

export const AboutPage: React.FC<Props> = ({}) => {
  const cardInfo = [
    { image: valentina, title: 'President', text: 'Valentina Litang' },
    { image: francis, title: 'Vice-President', text: 'Francis Rivas' },
    { image: elise, title: 'Treasurer', text: 'Elise Gonzalez' },
    { image: laurie, title: 'Independence Week Director', text: 'Laurie Rodriguez' },
    { image: richie, title: 'PR Co-Director', text: 'Ricardo Cordero' },
    { image: gely, title: 'PR Co-Director', text: 'Gelybeth Rodriguez' },
    { image: jeff, title: 'Social Media Manager', text: 'Jeff Fondeuro' },
    { image: nick, title: 'Graphic Designer', text: 'Nicholas Suriel' },
  ];

  const cards = cardInfo.map((card) => <MemberCard name={card.text} position={card.title} fileName={card.image} />);

  return (
    <FullWidth>
      <Container>
        <CenterRow>
          <Header>About us</Header>
        </CenterRow>
        <p>
          The Dominican Student Association was first established at the University of Florida in 2000. We are a
          welcoming club for all those interested in the Dominican Republic and who wish to make a difference in the
          lives of not only Dominican people but as many people as possible. DSA strives to create a community of
          Dominicans at the university. DSA hosts monthly General Body Meetings and social events, and during the Spring
          semester, a full week is dedicated to celebrating Dominican Independence. DSA also partakes in drives such as
          the holiday toy drive for kids in Haina, Dominican Republic and dance workshops with GatorSalsa.
        </p>
      </Container>

      <Container>
        <Hierarchy>{cards}</Hierarchy>
      </Container>
    </FullWidth>
  );
};
