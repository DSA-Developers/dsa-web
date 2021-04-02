import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import { FullWidth } from '../components/FullWidth';
import { Card, CardDeck } from 'react-bootstrap';
import { MemberCard } from '../components/MemberCard';

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

interface CardType {
  text: string;
  image?: string;
  title: string;
  fileName: string;
}

const storageRef = storage.ref();
const membersRef = database.ref('members');
console.log(membersRef);

const useCards = () => {
  const [cardInfo, setCardInfo] = useState<Array<CardType>>([]);

  const fetchMembers = async () => {
    let info: Array<CardType> = [];

    const snapshot = await membersRef.get();
    snapshot.forEach((member: any) => {
      let memberInfo: CardType = {
        text: member.val().name,
        title: member.val().role,
        fileName: member.val().photo,
        image: '',
      };
      info = [...info, memberInfo];
    });

    info = await fetchPhotos(info);

    setCardInfo(info);
  };

  const fetchPhotos = async (info: Array<CardType>) => {
    let index = 0;
    for (const member of info) {
      const photo = await storageRef.child('members/' + member.fileName).getDownloadURL();
      info[index] = { ...member, image: photo };
      index++;
    }
    return info;
  };

  const getInfo = async () => {
    fetchMembers();
  };

  useEffect(() => {
    getInfo();
  }, []);

  return cardInfo;
};

export const AboutPage: React.FC<Props> = ({}) => {
  const cardInfo = useCards();

  const cards = cardInfo.map((card) => (
    <MemberCard key={card.text} name={card.text} position={card.title} fileName={card.image} />
  ));

  const pres = {};

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
