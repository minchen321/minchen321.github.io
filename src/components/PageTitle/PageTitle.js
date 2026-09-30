import styled from 'styled-components';
import WaveLine from './wavy-line.png';

export const PageTitle = styled.h1`
  margin: 0 auto;
  max-width: 100%;
  font-size: 2rem;
  text-align: center;
  background: url(${WaveLine}) no-repeat center bottom / contain;
`;
