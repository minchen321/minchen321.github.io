import styled from 'styled-components';
import { BackgroundImg } from './assets';

export const Section = styled.section`
  height: 100%;
  min-height: 25rem;
  padding: 1rem;
`;

export const Container = styled.div`
  height: 100%;
  max-width: 24rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 41rem) {
    max-width: 56rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    max-width: 70rem;
    grid-gap: 5rem;
  }
`;

export const CardContainer = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
  & + * {
    margin-top: 2rem;
  }
  @media (min-width: 41rem) {
    & + * {
      margin-top: 3.5rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    background-size: ${({ $isShortViewport }) =>
      $isShortViewport ? '100% 100%' : '100% auto'};
    padding: 0 10%;
    margin-top: 0;
    & + * {
      margin-top: 0;
    }
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    padding: 0 15%;
  }
`;

export const Card = styled.a`
  width: 100%;
  max-width: 18rem;
  min-height: 16rem;
  padding: 2rem 0;
  text-align: center;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 1rem 0 rgba(100, 100, 100, 0.6);
  cursor: pointer;
  display: block;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }
  img {
    max-width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    max-width: none;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  @media (min-width: ${({ theme }) => theme.sm}) {
    min-height: 3.25rem;
    padding: 0 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    margin-top: 3rem;
    font-size: 1.625rem;
    min-height: 4.5rem;
  }
`;
