import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export const MainContainer = styled(Container)`
  margin: 0;
  padding: 0;
`;

export const Section = styled.div`
  padding: 5% 20% 5% 20%;
  background-color: #f8f9fb;
  width: 100%;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhiteSection = styled(Section)`
  background: white;
`;

export const Description = styled.h1`
  font-family: Optima, Segoe, 'Segoe UI', Candara, Calibri, Arial, sans-serif;
  font-size: 35px;
  font-style: normal;
  font-variant: normal;
  font-weight: 100;
  line-height: 60px;
  padding: 5% 10%;
  text-align: center;
`;

export const FullWidth = styled.div`
  bottom: 0;
  width: 100%;
  height: fit-content;
`;