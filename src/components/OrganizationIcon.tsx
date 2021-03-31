import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

interface Props {
  link: string;
  photo: string;
  text: string;
}

const StyledCard = styled.div`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
const Icon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 25px;
`;

export const OrganizationIcon: React.FC<Props> = ({ link, photo, text }) => {
  return (
    <StyledCard>
      <a href={link} target="_blank" style={{ color: '#000' }}>
        <Icon src={photo} />
        <Card.Title style={{ padding: '25px 50px 25px 0px', fontSize: '17px', textAlign: 'center' }}>{text}</Card.Title>
      </a>
    </StyledCard>
  );
};
