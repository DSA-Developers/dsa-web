import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { CenterRow } from '../components/CenterRow';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import UFlogo from '../assets/UF logo.png';
import HSAlogo from '../assets/HSA Logo.png';
import GWlogo from '../assets/GatorWell.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface Props {}

const Title = styled.h1`
  font-family: Roboto;
  padding: 5%;
  margin-right: 100px;
`;
const StyledCard = styled.div`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const HomePage: React.FC<Props> = ({}) => {
  return (
    <Container>
      <CenterRow>
        <Title>Home Page</Title>
      </CenterRow>
      <CenterRow>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum elementum lorem. Quisque ac dapibus
          lacus, in sagittis leo. Praesent fermentum nec massa et imperdiet. Fusce sapien nisl, lacinia ut ante eu,
          laoreet elementum ex. Duis eget purus a dui pellentesque maximus. Aenean vel ultricies velit. Mauris
          scelerisque sapien dolor, a laoreet magna aliquet ut. Vestibulum nec dignissim tellus. Recusandae autem et
          ipsam. Saepe qui et repellat. Maxime distinctio non occaecati cum voluptates voluptatibus quo minima.
          Inventore facilis a accusantium quaerat ut quam quos. Enim qui porro nobis in qui ratione. Porro non maxime et
          porro veniam ut laudantium. Magni quidem non officiis eaque nobis quidem. Laboriosam doloremque quos eius.
          Maiores quia est explicabo nisi consectetur. Consectetur velit ducimus maiores iusto quia natus aliquid. Odio
          libero magnam praesentium accusantium pariatur quia perspiciatis incidunt. Provident consectetur quo nostrum
          veniam. Nam inventore ullam repellat soluta corrupti quam. Dolor quis aliquam exercitationem rerum iure
          placeat voluptatem. Id non rem reprehenderit dolor similique et. Et ut laborum velit incidunt. Ea excepturi et
          repudiandae. Rem culpa rerum dolores accusantium sed magnam facilis officia. Quaerat exercitationem minima
          dolor amet rerum nesciunt est occaecati. Labore quidem quae excepturi. Et praesentium quidem nihil quos.
        </h2>
      </CenterRow>

      <CenterRow>
        <Title>Resources</Title>
      </CenterRow>

      <Container>
        <CenterRow>
          <Col>
            <StyledCard>
              <a href="https://www.ufhsa.com/campus-resources" target="_blank">
                <Card style={{ width: '15rem', height: '15rem' }} bg="light">
                  <Image src={UFlogo} style={{ padding: '5%', maxWidth: '100%', margin: 'auto' }} />
                </Card>
              </a>
              <Card.Title style={{ padding: '2rem 1rem', fontSize: '25px' }}>Campus Resources</Card.Title>
            </StyledCard>
          </Col>
          <Col>
            <StyledCard>
              <a href="https://www.ufhsa.com/hsa-resources" target="_blank">
                <Card style={{ width: '15rem', height: '15rem' }} bg="light">
                  <Image src={HSAlogo} style={{ padding: '5%' }} />
                </Card>
              </a>
              <Card.Title style={{ padding: '2rem 2rem', fontSize: '25px' }}>HSA Resources</Card.Title>
            </StyledCard>
          </Col>
          <Col>
            <StyledCard>
              <a href="https://www.ufhsa.com/mental-health-resources" target="_blank">
                <Card style={{ width: '15rem', height: '15rem' }} bg="light">
                  <Image src={GWlogo} style={{ padding: '5%' }} />
                </Card>
              </a>
              <Card.Title style={{ padding: '2rem 2.5rem', fontSize: '25px' }}>Mental Health</Card.Title>
            </StyledCard>
          </Col>
        </CenterRow>
      </Container>

      <Title></Title>
    </Container>
  );
};
