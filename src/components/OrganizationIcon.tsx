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
  width: 150px;
  height: 150px;
  border-radius: 25px;
`;

const StyledTitle = styled.h1`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 450;
  line-height: 26.4px;
  padding: 5%;
  text-align: center;
`;

export const OrganizationIcon: React.FC<Props> = ({ link, photo, text }) => {
  return (
    <StyledCard>
      <a href={link} target="_blank" style={{ color: '#000' }}>
        <Icon src={photo} />
        <Card.Title style={{ padding: '25px 100px 25px 0px', fontSize: '22px', textAlign: 'center' }}>
          <StyledTitle>{text}</StyledTitle>
        </Card.Title>
      </a>
    </StyledCard>
  );
};
