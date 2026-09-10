import React from 'react';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  padding: 0.75rem 2rem;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>Designed and Coded with ☕ &amp; ❤️</p>
      <p>Copyright &copy; Min Chen {new Date().getFullYear()}</p>
    </FooterWrapper>
  );
};
