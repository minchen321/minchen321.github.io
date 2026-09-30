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
import { ReactComponent as Line } from './assets/line.svg';

export const Navbar = ({
  currentPage,
  handlePageChange,
  isScrollable = true,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isDesktop = useMediaQuery(`(min-width: ${theme.sm})`);
  useBodyScrollLock(isOpen && !isDesktop);

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
          aria-current={currentPage === index ? 'page' : undefined}
        >
          {label}
          {currentPage === index && <Line aria-hidden="true" />}
        </DynamicTag>
      </Item>
    ));

  return (
    <NavbarWrapper>
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
            <HamburgerButton>
              <Hamburger
                rounded
                color={theme.primaryBlue}
                label="Show menu"
                toggled={isOpen}
                size={24}
                toggle={setIsOpen}
              />
            </HamburgerButton>
            {isOpen && (
              <MenuPanel>
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
