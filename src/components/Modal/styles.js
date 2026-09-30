import styled from 'styled-components';

export const ModalSurface = styled.section`
  position: fixed;
  inset: 0;
  z-index: 100;
  overflow-y: auto;
  overscroll-behavior: contain;
  background-color: ${({ theme }) => theme.white};
`;

export const ModalCloseButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  z-index: 1;
  width: 2.75rem;
  height: 2.75rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 6px 0.25rem rgba(50, 50, 50, 0.08);
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
