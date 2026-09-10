import styled from 'styled-components';
import WaveLine from './assets/wavy-line.png';

export const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 0;
  @media (min-width: ${({ theme }) => theme.sm}) {
    padding: 5rem 0;
  }
`;

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 80rem;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.sm}) {
    padding: 0 4rem;
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    padding: 0 1.5rem;
  }
`;

export const PageTite = styled.h2`
  margin: 0 auto;
  width: 15rem;
  font-size: 2rem;
  text-align: center;
  padding-bottom: 1.5rem;
  background-image: url(${WaveLine});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  @media (min-width: ${({ theme }) => theme.sm}) {
    width: 18rem;
    font-size: 2.5rem;
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    width: 26rem;
    font-size: 3.5rem;
    padding-bottom: 2rem;
  }
`;

export const ProjectGroup = styled.div`
  margin-top: 6rem;
  img {
    display: block;
    width: 100%;
  }
  .web-pic {
    border-radius: 0.75rem;
    box-shadow: 0 0 0.5rem 0.25rem rgba(186, 186, 186, 0.5);
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    margin-top: 8rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 4rem;
    & > * {
      width: 50%;
    }
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    gap: 6rem;
  }
`;

export const ProjectContent = styled.div`
  margin-top: 1.5rem;
  max-height: 34.5rem;
  @media (min-width: ${({ theme }) => theme.md}) {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vw;
    border-radius: 50%;
    background-color: rgba(232, 232, 232, 0.2);
  }
`;

export const AboutProject = styled.div`
  font-weight: 500;
  & > * {
    margin-top: 1rem;
  }
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  .project-type {
    font-weight: 600;
    color: ${({ theme }) => theme.primaryBlue};
  }
  .view-btn {
    font-weight: 600;
    color: ${({ theme }) => theme.primaryBlue};
    display: inline-block;
    border-bottom: 3px solid ${({ theme }) => theme.primaryBlue};
    font-size: 1.125rem;
    &:hover {
      border-bottom: 3px solid transparent;
    }
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    max-width: 60%;
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    & > * {
      margin-top: 1.5rem;
    }
    max-width: 65%;
    h3 {
      font-size: 2.25rem;
    }
    .view-btn,
    .project-type {
      font-size: 1.5rem;
    }
  }
`;

export const ProjectModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.white};
  z-index: 100;

  @media (min-width: ${({ theme }) => theme.md}) {
    padding: 7rem 5rem;
  }
`;

export const ProjectModalContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  box-shadow: 0 0 6px 4px rgba(50, 50, 50, 0.08);
  @media (min-width: ${({ theme }) => theme.md}) {
    border-radius: 1rem;
    img:first-child {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
    img:last-child {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
  video,
  img {
    width: 100%;
    display: block;
  }
  video {
    margin-bottom: -0.25rem;
    margin-top: -0.25rem;
  }
  &#biscuit-modal-content {
    background-color: #25282f;
    padding: 4rem 1rem;
    @media (min-width: ${({ theme }) => theme.sm}) {
      padding: 6rem 4rem;
    }
    img {
      border-radius: 1rem;
      border: 0.125rem solid ${({ theme }) => theme.white};
      box-shadow: 0 0 0.125rem 0.25rem rgba(50, 50, 50, 0.75);
      & + img {
        margin-top: 2rem;
        @media (min-width: ${({ theme }) => theme.sm}) {
          margin-top: 6.25rem;
        }
      }
    }
  }
`;

export const ModalCloseButton = styled.button`
  position: fixed;
  width: 2rem;
  right: 1.5rem;
  top: 1rem;
  z-index: 100;
  img {
    background-color: ${({ theme }) => theme.white};
    padding: 0.35rem;
    border-radius: 50%;
    box-shadow: 0 0 6px 0.25rem rgba(50, 50, 50, 0.08);
  }
`;
