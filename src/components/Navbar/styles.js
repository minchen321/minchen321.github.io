import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.sm}) {
    position: sticky;
  }
`;

export const SiteBrand = styled.h1`
  display: none;
  justify-content: center;
  align-items: center;
  a,
  button {
    font-family: ${({ theme }) => theme.primaryFont};
    font-size: 1.25rem;
    font-weight: 500;
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    display: flex;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  @media (min-width: ${({ theme }) => theme.sm}) {
    padding: 0 1.5rem;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: none;
  @media (min-width: ${({ theme }) => theme.sm}) {
    display: flex;
  }
`;

export const MenuListItem = styled.li`
  a,
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 6.75rem;
    min-height: 3.5rem;
    padding: 1rem 1rem 0.25rem;
    font-family: ${({ theme }) => theme.primaryFont};
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const HamburgerButton = styled.div`
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  z-index: 21;
  cursor: pointer;
  background-color: ${({ theme }) => theme.white};
  border-radius: 2rem;
  box-shadow: 0 0 0.625rem 0.25rem rgba(50, 50, 50, 0.08);
  .hamburger-react div div {
    height: 3px !important;
  }
`;

export const MenuPanel = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileMenuList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const MobileMenuListItem = styled.li`
  width: 100%;
  text-align: center;
  & + * {
    margin-top: 1.5rem;
  }
  a,
  button {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    min-height: 3.5rem;
    margin: 0 auto;
    padding: 1rem 1rem 0.25rem;
    font-family: ${({ theme }) => theme.primaryFont};
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.white};
    path {
      fill: currentColor;
    }
  }
`;
