import styled from 'styled-components';
import { PageTitle } from '../../components';

export const Main = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  margin: 0 auto;
  width: 18rem;
  text-align: center;
  font-size: 1rem;
  @media (min-width: ${({ theme }) => theme.sm}) {
    width: 40rem;
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    font-size: 1.25rem;
  }
`;

export const ProjectPageTitle = styled(PageTitle)`
  width: 14rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  @media (min-width: ${({ theme }) => theme.sm}) {
    width: 16rem;
    font-size: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    width: 20rem;
    font-size: 3rem;
    padding-bottom: 2rem;
  }
`;

export const Container = styled.div`
  margin: 2rem 0 8rem;
`;

export const SliderWrapper = styled.div`
  padding-bottom: 4rem;
  .video-player {
    display: block;
  }
  .slick-list {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .slick-slide {
    padding: 0 1.5vw;
    transition: transform 0.2s ease;
    transform: scale(0.9);
    &.slick-center {
      transform: scale(1.1);
    }
  }
`;

export const Slide = styled.div`
  border-radius: 1.25rem;
  text-align: center;
  h4 {
    font-size: 1rem;
    font-weight: 400;
    animation-duration: 80ms;
    animation-delay: 0s;
  }
  h3 {
    margin-top: 1.5rem;
    font-size: 1.25rem;
    animation-duration: 80ms;
    animation-delay: 0s;
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    padding: 1rem;
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const VideoWrapper = styled.div`
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 1.25rem;
  overflow: hidden;
  display: flex;
  object-fit: cover;
  aspect-ratio: 16 / 9;
  mux-player::part(pre-play) {
    --media-control-background: ${({ theme }) => theme.primaryBlue} !important;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  bottom: 0.5rem;
  z-index: 5;
  width: 3.5rem;
  transition: transform 0.2s ease;
  &.right-arrow {
    right: 1rem;
  }
  &.left-arrow {
    left: 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    &.right-arrow {
      right: calc(35vw - 4rem);
    }
    &.left-arrow {
      left: calc(35vw - 4rem);
    }
  }
`;
