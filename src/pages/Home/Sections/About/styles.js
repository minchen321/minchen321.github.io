import styled, { css } from 'styled-components';
import {
  AboutBg,
  AboutBgMobile,
  LeftBubbleIcon,
  RightBubbleIcon,
  WordBubbleLeft,
  WordBubbleRight,
} from './assets';

export const Section = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 105rem;
  margin: 0 auto;
  min-height: 31.25rem;
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.sm}) {
    min-height: 44rem;
  }
`;

const panelLayer = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.white};
  animation-duration: 700ms;
  animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
  &.is-exiting {
    z-index: 1;
  }
`;

export const Title = styled.h2`
  position: absolute;
  z-index: 1;
  top: 5%;
  left: 0;
  width: 100%;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.secondaryFont};
  text-align: center;
  @media (min-width: ${({ theme }) => theme.md}) {
    font-size: 2.25rem;
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    font-size: 2.75vw;
  }
`;

export const BgImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const bgDoodle = css`
  position: absolute;
  top: 0;
  height: 100%;
  max-width: calc(50% - 5.5rem);
  object-fit: contain;
  transition: transform 0.15s ease-out;
  display: none;
  @media (min-width: ${({ theme }) => theme.md}) {
    display: block;
  }
`;

export const AboutBgLeftImg = styled.img`
  ${bgDoodle};
  right: calc(50% + 5.5rem);
`;

export const AboutBgRightImg = styled.img`
  ${bgDoodle};
  left: calc(50% + 5.5rem);
`;

export const MenuPanel = styled.div`
  ${panelLayer};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 0.25rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${AboutBgMobile});
  @media (min-width: ${({ theme }) => theme.sm}) {
    align-items: flex-start;
    padding: 0 2%;
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    background-image: url(${AboutBg});
    padding: 0 8%;
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    padding: 0 15%;
  }
`;

const WordBubble = styled.button`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 40%;
  padding: 0;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  cursor: pointer;
  transition: transform 0.15s ease-out;
  p {
    padding: 0 0.7rem;
    font-size: 3vw;
    font-family: ${({ theme }) => theme.secondaryFont};
    text-align: left;
  }
  .more-link {
    width: 1rem;
    height: auto;
    vertical-align: middle;
    color: ${({ theme }) => theme.primaryBlue};
    .arrow-bg,
    .arrow-head {
      transition: fill 0.15s ease-out;
    }
    .arrow-bg {
      fill: transparent;
    }
  }
  &:hover .more-link {
    .arrow-bg {
      fill: ${({ theme }) => theme.primaryBlue};
    }
    .arrow-head {
      fill: ${({ theme }) => theme.white};
    }
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    width: 35%;
    p {
      padding: 0 1.25rem;
      font-size: 1.25rem;
    }
    .more-link {
      width: 1.25rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    p {
      padding: 0 1.5rem;
      font-size: 1.75rem;
    }
    .more-link {
      width: 1.5rem;
    }
  }
`;

export const LeftBubble = styled(WordBubble)`
  height: 88%;
  justify-content: flex-start;
  background-image: url(${LeftBubbleIcon});
  .more-link {
    transform: scaleX(-1);
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    height: 85%;
  }
`;

export const RightBubble = styled(WordBubble)`
  height: 95%;
  justify-content: center;
  background-image: url(${RightBubbleIcon});
  @media (min-width: ${({ theme }) => theme.sm}) {
    height: 100%;
  }
`;

export const CodingPanel = styled.div`
  ${panelLayer};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3.5rem 0 0;
  overflow-y: auto;
  @media (min-width: ${({ theme }) => theme.sm}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    overflow: hidden;
  }
`;

export const CoderIntro = styled.div`
  position: relative;
  width: 90%;
  padding: 0 0 3rem;
  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    font-family: 'Jost', sans-serif;
    margin-bottom: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    width: 65%;
    max-width: none;
    padding: 0 2rem 4rem;
    p {
      padding: 1.5rem 7% 3.5rem 13%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-image: url(${WordBubbleLeft});
    }
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    width: 60%;
    p {
      padding: 3rem 5% 5rem 13%;
      font-size: 1.5rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    width: 50%;
    max-width: 50rem;
    p {
      padding: 2.5rem 13% 4rem;
      font-size: 1.625rem;
    }
  }
`;

export const SideImg = styled.div`
  order: -1;
  max-width: 80%;
  text-align: center;
  img {
    width: 90%;
    max-width: 25rem;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    order: 0;
    width: 35%;
    max-width: none;
    img {
      max-width: 100%;
    }
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    width: 40%;
  }
`;

export const PersonalPanel = styled.div`
  ${panelLayer};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  @media (min-width: ${({ theme }) => theme.sm}) {
    padding: 0 10%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

export const PersonalSideImg = styled.div`
  width: 100%;
  padding: 1rem;
  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    margin-bottom: 1rem;
    border-radius: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    margin-bottom: 0;
    width: 50%;
    padding: 0 2rem;
    img {
      border-radius: 1.5rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    width: 40%;
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    width: 35%;
  }
`;

export const SelfIntro = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 3rem;
  @media (min-width: ${({ theme }) => theme.sm}) {
    width: 50%;
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    width: 65%;
    padding-bottom: 5rem;
  }
`;

export const IntroContent = styled.div`
  margin: 0 auto;
  padding: 0 1.25rem;
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.35;
  }
  .text-link {
    white-space: nowrap;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    width: 85%;
    max-width: 40rem;
    padding: 1.5rem 10% 4rem 6%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    background-image: url(${WordBubbleRight});
    p {
      font-size: 1.25rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.lg}) {
    max-width: 45rem;
    p {
      font-size: 1.625rem;
    }
  }
`;

export const BackButton = styled.button`
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 6rem;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 100%;
  }
  &.left-back {
    left: 0;
  }
  &.right-back {
    right: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    &.left-back {
      left: 8%;
    }
  }
  @media (min-width: ${({ theme }) => theme.md}) {
    &.right-back {
      right: 12%;
    }
  }
`;
