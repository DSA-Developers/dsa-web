import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

import { WhiteSection } from './Containers';
import Title from './Title';
import OrganizationIcon from './OrganizationIcon';

import HSALogo from '../assets/HispanicStudentLogo.png';
import ArSALogo from '../assets/ArgentineStudentsLogo.png';
import ATCLogo from '../assets/ArgentineTango.png';
import CASALogo from '../assets/CubanAmericanLogo.png';
import CALORLogo from '../assets/CentralAmericanLogo.png';
import GSCLogo from '../assets/GatorSalsaLogo.png';
import HCALogo from '../assets/HispanicCommunicatorsLogo.png';
import MASALogo from '../assets/MexicanStudentLogo.png';
import PASSLogo from '../assets/PeruvianAmericanLogo.png';
import PCLogo from '../assets/PorColombiaLogo.png';
import SLLogo from '../assets/SaborLatinoLogo.png';
import UEPALogo from '../assets/UnionDeEstudiantesLogo.png';
import VENSALogo from '../assets/VenezuelanStudentLogo.png';

const clubInfo = [
  { link: 'https://www.ufhsa.com/argentina', photo: ArSALogo, text: 'Argentine Student Association' },
  { link: 'https://www.ufhsa.com/tango', photo: ATCLogo, text: 'Argentine Tango Club' },
  { link: 'https://www.ufhsa.com/cuba', photo: CASALogo, text: 'Cuban American Student Association' },
  { link: 'https://www.ufhsa.com/centralamerica', photo: CALORLogo, text: 'Central American Latino Organization' },
  { link: 'https://www.ufhsa.com/salsa', photo: GSCLogo, text: 'Gator Salsa Club' },
  {
    link: 'https://www.ufhsa.com/hispanic-communicators',
    photo: HCALogo,
    text: 'Hispanic Communicators Association',
  },
  { link: 'https://www.ufhsa.com/mexico', photo: MASALogo, text: 'Mexican-American Student Association' },
  { link: 'https://www.ufhsa.com/peru', photo: PASSLogo, text: 'Peruvian American Student Society' },
  { link: 'https://www.ufhsa.com/colombia', photo: PCLogo, text: 'Por Colombia' },
  { link: 'https://www.ufhsa.com/sabor-latino', photo: SLLogo, text: 'Sabor Latino' },
  {
    link: 'https://www.ufhsa.com/puertorico',
    photo: UEPALogo,
    text: 'La Union de Estudiantes Puertorriqueños Activos',
  },
  { link: 'https://www.ufhsa.com/venezuela', photo: VENSALogo, text: 'Venezuelan Student Association' },
];

const AffiliationsGrid: React.FC = ({}) => {
  const clubs = clubInfo.map((club) => (
    <OrganizationIcon key={club.link} link={club.link} photo={club.photo} text={club.text} />
  ));

  return (
    <WhiteSection>
      <Title>Parent Organization</Title>
      <br />
      <StyledCard>
        <a href="https://www.ufhsa.com/" target="_blank" style={{ color: '#000' }}>
          <img src={HSALogo} />
          <Card.Title>
            <ParentTitle>Hispanic Student Association</ParentTitle>
          </Card.Title>
        </a>
      </StyledCard>
      <br />
      <Title>
        <h1>In Association With:</h1>
      </Title>
      <Affiliations>{clubs}</Affiliations>
    </WhiteSection>
  );
};

export default AffiliationsGrid;

const ParentTitle = styled.h1`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-size: 27px;
  font-style: normal;
  font-weight: 100;
  line-height: 26.4px;
  padding: 5%;
  text-align: center;
`;

const StyledCard = styled.div`
  transition: transform 0.2s;
  max-width: 250px;
  &:hover {
    transform: scale(1.1);
  }
  margin-bottom: 50px;
`;

const Affiliations = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(3, 150px);
  column-gap: 100px;
  row-gap: 100px;
  text-align: center;
`;
