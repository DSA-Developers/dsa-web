import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

interface Props {
  name: string;
  position: string;
  fileName: string;
}

const StyledCard = styled.div`
  transition: transform 0.2s;
  width: 200px;
  &:hover {
    transform: scale(1.1);
  }
`;
const Icon = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

const StyledTitle = styled.h1`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 450;
  line-height: 26.4px;
  padding: 3%;
  text-align: center;
`;

export const MemberCard: React.FC<Props> = ({ name, position, fileName }) => {
  return (
    <StyledCard>
      <Icon src={fileName} />
      <Card.Title style={{ fontSize: '22px', textAlign: 'center' }}>
        <StyledTitle>
          <b>{name}</b>
        </StyledTitle>
        <StyledTitle>{position}</StyledTitle>
      </Card.Title>
    </StyledCard>
  );
};
