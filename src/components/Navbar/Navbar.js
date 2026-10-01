import React from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import {
  NavbarWrapper,
  Container,
  SiteBrand,
  MenuList,
  MenuListItem,
  HamburgerButton,
  MenuPanel,
  MobileMenuList,
  MobileMenuListItem,
} from './styles';
import theme from '../../theme';
import { HOME_SECTIONS } from '../../navigation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { ReactComponent as Line } from './assets/line.svg';

export const Navbar = ({
  currentPage,
  handlePageChange,
  isScrollable = true,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isDesktop = useMediaQuery(`(min-width: ${theme.sm})`);
  const navRef = React.useRef(null);
  useBodyScrollLock(isOpen && !isDesktop);
  useFocusTrap(navRef, isOpen && !isDesktop, () => setIsOpen(false), 'main');

  React.useEffect(() => {
    const toggle = navRef.current.querySelector('.hamburger-react');
    if (isOpen) toggle?.setAttribute('aria-controls', 'mobile-navigation');
    else toggle?.removeAttribute('aria-controls');
  }, [isDesktop, isOpen]);

  React.useEffect(() => {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop]);

  const DynamicTag = isScrollable ? 'button' : 'a';
  const navigationProps = (index) =>
    isScrollable
      ? {
          type: 'button',
          onClick: () => {
            handlePageChange(index);
            setIsOpen(false);
          },
        }
      : { href: `/#${HOME_SECTIONS[index].id}` };

  const renderItems = (Item) =>
    HOME_SECTIONS.map(({ id, label }, index) => (
      <Item key={id}>
        <DynamicTag
          {...navigationProps(index)}
          data-autofocus={index === 0 ? '' : undefined}
          aria-current={currentPage === index ? 'page' : undefined}
        >
          {label}
          {currentPage === index && <Line aria-hidden="true" />}
        </DynamicTag>
      </Item>
    ));

  return (
    <NavbarWrapper ref={navRef} aria-label="Main navigation">
      <Container>
        {isDesktop ? (
          <>
            <SiteBrand>
              <DynamicTag {...navigationProps(0)}>Min Chen</DynamicTag>
            </SiteBrand>
            <MenuList>{renderItems(MenuListItem)}</MenuList>
          </>
        ) : (
          <>
            <HamburgerButton
              onKeyDown={(event) => {
                if (event.key === ' ') event.preventDefault();
              }}
              onKeyUp={(event) => {
                if (event.key === ' ') {
                  event.preventDefault();
                  setIsOpen((open) => !open);
                }
              }}
            >
              <Hamburger
                rounded
                color={theme.primaryBlue}
                label={isOpen ? 'Close menu' : 'Show menu'}
                toggled={isOpen}
                size={24}
                toggle={setIsOpen}
              />
            </HamburgerButton>
            {isOpen && (
              <MenuPanel id="mobile-navigation">
                <MobileMenuList>
                  {renderItems(MobileMenuListItem)}
                </MobileMenuList>
              </MenuPanel>
            )}
          </>
        )}
      </Container>
    </NavbarWrapper>
  );
};
