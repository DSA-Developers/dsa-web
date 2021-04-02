import React from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
  name: string;
  position: string;
  fileName: string | undefined;
}

export const MemberCard: React.FC<Props> = ({ name, position, fileName}) => {
  return (
    <Card bg='danger' text='light' border='primary' >
      <Card.Img variant="top" src={fileName} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{position}</Card.Text>
      </Card.Body>
    </Card>
  );
};