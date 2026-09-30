import styled from 'styled-components';

export const HomeMain = styled.main`
  --home-page-height: 100vh;

  @supports (height: 100dvh) {
    --home-page-height: 100dvh;
  }

  @media (min-width: ${({ theme }) => theme.sm}) {
    --home-page-height: calc(100vh - 3.5rem);
  }
`;

export const ScrollableContainer = styled.div`
  height: var(--home-page-height);
  overflow-y: auto;
`;
