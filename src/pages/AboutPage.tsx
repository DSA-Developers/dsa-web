import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import { FullWidth } from '../components/FullWidth';
import { CardDeck } from 'react-bootstrap';
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

interface CardType {
  name: string;
  photo: string;
  role: string;
  url: string;
}

const storageRef = storage.ref();
const membersRef = database.ref('members');
console.log(membersRef);

const useCards = () => {
  const [cardInfo, setCardInfo] = useState<Array<CardType>>([]);

  const fetchMemberInfo = async () => {
    let info: Array<CardType> = [];
    let keysNoURL: Array<number> = [];

    const snapshot = await membersRef.get();
    snapshot.forEach((member: any) => {
      if (!member.val().url) {
        keysNoURL.push(member.key);
      }
      let memberInfo: CardType = {
        name: member.val().name,
        role: member.val().role,
        photo: member.val().photo,
        url: '' || member.val().url,
      };
      info = [...info, memberInfo];
    });

    if (keysNoURL.length !== 0) {
      await fetchPhotos(info, keysNoURL);
    }

    setCardInfo(info);
  };

  const fetchPhotos = async (info: Array<CardType>, keys: Array<number>) => {
    for (const index of keys) {
      const member = info[index - 1];
      const url = await storageRef.child('members/' + member.photo).getDownloadURL();
      info[index - 1] = { ...member, url: url };
      membersRef.child(`${index}`).set({
        name: member.name,
        role: member.role,
        photo: member.photo,
        url: url,
      });
    }
    return info;
  };

  useEffect(() => {
    fetchMemberInfo();
  }, []);

  return cardInfo;
};

export const AboutPage: React.FC<Props> = ({}) => {
  const cardInfo = useCards();

  const cards = cardInfo.map((card) => (
    <MemberCard key={card.url} name={card.name} position={card.role} fileName={card.url} />
  ));

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
