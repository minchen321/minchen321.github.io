import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  overflow: hidden;
  background-color: #fbfbfb;
`;

export const Loader = styled.img`
  display: block;
  width: 14rem;
  height: auto;
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const StatusText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  @media (prefers-reduced-motion: reduce) {
    position: static;
    width: auto;
    height: auto;
    clip-path: none;
  }
`;
