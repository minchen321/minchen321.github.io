import styled, { keyframes } from 'styled-components';
import { Modal } from '../../../../components';
import { BackgroundImg } from './assets';

const slideInFromBelowViewport = keyframes`
  from {
    transform: translate3d(0, 100vh, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const Section = styled.section`
  height: 100%;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 105rem;
  width: 100%;
  margin: 0 auto;
  min-height: 48rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.lg}) {
    background-size: 100% 100%;
  }
`;

export const Phone = styled.div`
  position: relative;
  max-width: 21rem;
  background-color: ${({ theme }) => theme.white};
  padding: 4.5rem 1rem 5rem;
  border-radius: 2.5rem;
  box-shadow: 0 0 1rem 0 rgba(100, 100, 100, 0.6);
  opacity: 0;
  animation-duration: 800ms;
  animation-delay: 200ms;
  &.animate__slideInUp {
    opacity: 1;
    animation-name: ${slideInFromBelowViewport};
  }
  &:before {
    content: '';
    width: 5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    background-color: #d6d6d6;
    position: absolute;
    left: calc(50% - 2.5rem);
    top: 2.25rem;
    z-index: 1;
  }
  &:after {
    content: '';
    width: 3.25rem;
    height: 3.25rem;
    background-color: #d6d6d6;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 1.625rem);
    bottom: 0.75rem;
    z-index: 1;
  }
`;

export const PhoneContent = styled.div`
  padding: 2rem 1rem 6rem;
  background-color: ${({ theme }) => theme.primaryBlue};
  @media (min-width: ${({ theme }) => theme.sm}) {
    padding: 3rem 1.5rem 7rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.white};
  text-align: center;
  margin: 0 0 1.5rem;
  @media (min-width: ${({ theme }) => theme.sm}) {
    font-size: 2.75rem;
  }
`;

export const SocialMediaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1.5rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 2rem;
  padding: 1.25rem;
  @media (min-width: ${({ theme }) => theme.sm}) {
    padding: 1.5rem;
  }
`;

export const SocialMediaLink = styled.a`
  display: block;
  max-width: 4.75rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem 0.25rem rgba(90, 90, 90, 0.3);
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    max-width: 6.75rem;
  }
`;

export const ContactModalWrapper = styled(Modal)`
  padding: 5rem 0 2.5rem;
`;

export const ModalContainer = styled.div`
  padding: 0 2rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2rem;
    text-align: center;
    margin: 0;
  }
  .modal-content {
    width: 18.75rem;
    min-height: 40rem;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    padding: 20vh 0 0;
    h2 {
      font-size: 2.5rem;
    }
    .modal-content {
      width: 40rem;
      min-height: 43.75rem;
    }
  }
`;

export const ContactForm = styled.form`
  margin-top: 3rem;
  label {
    display: block;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    width: 100%;
    border: 0.125rem solid ${({ theme }) => theme.primaryBlack};
    border-radius: 0.75rem;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    &:focus {
      border: 0.125rem solid #b7b7b7;
      outline: none;
      box-shadow: none;
    }
  }
  .form-group {
    margin-bottom: 1.5rem;
  }
`;

export const SubmitButton = styled.button`
  margin: 5% auto 0;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryBlack};
  color: ${({ theme }) => theme.white};
  font-size: 1.25rem;
  border: 0.125rem solid ${({ theme }) => theme.primaryBlack};
  border-radius: 0.75rem;
  padding: 0.75rem;
  display: block;
  @media (min-width: ${({ theme }) => theme.sm}) {
    max-width: 18rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.primaryBlack};
  }
`;
