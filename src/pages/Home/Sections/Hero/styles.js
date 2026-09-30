import styled, { keyframes } from 'styled-components';
import { HomeBg, HomeBgMobile } from './assets';

const flyAcross = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(calc(-1 * var(--helicopter-width)));
  }
`;

export const Section = styled.section`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  height: 100%;
  min-height: ${({ $isShortViewport }) => ($isShortViewport ? '35rem' : '0')};
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
  background-image: url(${HomeBgMobile});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    width: clamp(2rem, 5vw, 6rem);
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.white},
      transparent
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.white},
      transparent
    );
  }

  @media (min-width: ${({ theme }) => theme.sm}) {
    min-height: ${({ $isShortViewport }) => ($isShortViewport ? '40rem' : '0')};
    background-image: url(${HomeBg});
    background-size: 100%;
  }
`;

export const Helicopter = styled.div`
  --helicopter-width: 8rem;
  position: absolute;
  z-index: 0;
  top: 4.5rem;
  left: 0;
  width: 100%;
  pointer-events: none;
  animation: ${flyAcross} 25s linear infinite;
  animation-play-state: ${({ $isActive }) =>
    $isActive ? 'running' : 'paused'};
  img {
    position: absolute;
    left: 0;
    width: var(--helicopter-width);
    height: auto;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    animation-duration: 26s;
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    top: 1rem;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    img {
      left: auto;
      right: 10%;
    }
  }
`;

export const IntroTitle = styled.h1`
  position: relative;
  z-index: 2;
  display: grid;
  align-items: center;
  max-width: 16rem;
  margin-bottom: 40%;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.secondaryFont};
  text-align: center;
  > span {
    grid-area: 1 / 1;
  }
  .intro-placeholder {
    visibility: hidden;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    max-width: 23rem;
    margin-bottom: 20%;
    font-size: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    max-width: 25rem;
    font-size: 2.25rem;
  }
`;
