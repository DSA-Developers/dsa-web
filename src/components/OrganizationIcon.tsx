import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

interface Props {
  link: string;
  photo: string;
  text: string;
}

const OrganizationIcon: React.FC<Props> = ({ link, photo, text }) => {
  return (
    <StyledCard>
      <a href={link} target="_blank" style={{ color: '#000' }}>
        <Icon src={photo} />
        <Card.Title style={{ fontSize: '22px', textAlign: 'center', marginTop: '10px' }}>
          <StyledTitle>{text}</StyledTitle>
        </Card.Title>
      </a>
    </StyledCard>
  );
};

export default OrganizationIcon;

const StyledCard = styled.div`
  transition: transform 0.2s;
  width: 150px;

  &:hover {
    transform: scale(1.1);
    text-decoration: none;
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
  text-align: center;
`;
