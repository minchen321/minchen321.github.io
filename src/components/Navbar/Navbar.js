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
import { ReactComponent as Line } from './assets/line.svg';

export const Navbar = ({
  currentPage,
  handlePageChange,
  isScrollable = true,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const MENU_ITEMS = ['Home', 'About', 'Portfolio', 'Contact'];

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const DynamicTag = isScrollable ? 'button' : 'a';

  return (
    <NavbarWrapper>
      <Container>
        {!isMobile ? (
          <>
            <SiteBrand>
              <DynamicTag
                {...(isScrollable
                  ? {
                      onClick: () => {
                        handlePageChange(0);
                      },
                    }
                  : {
                      href: '/',
                    })}
              >
                Min Chen
              </DynamicTag>
            </SiteBrand>
            <MenuList>
              {MENU_ITEMS.map((item, index) => (
                <MenuListItem key={index}>
                  <DynamicTag
                    {...(isScrollable
                      ? {
                          onClick: () => {
                            handlePageChange(index);
                          },
                        }
                      : {
                          href: `/#${item.toLowerCase()}`,
                        })}
                  >
                    {item}
                    {currentPage === index && <Line />}
                  </DynamicTag>
                </MenuListItem>
              ))}
            </MenuList>
          </>
        ) : (
          <>
            <HamburgerButton>
              <Hamburger
                rounded
                color="#5876b3"
                label="Show menu"
                toggled={isOpen}
                size={24}
                toggle={() => setIsOpen(!isOpen)}
              />
            </HamburgerButton>
            {isOpen && (
              <MenuPanel>
                <MobileMenuList>
                  {MENU_ITEMS.map((item, index) => (
                    <MobileMenuListItem key={index}>
                      <DynamicTag
                        {...(isScrollable
                          ? {
                              onClick: () => {
                                handlePageChange(index);
                                setIsOpen(false);
                              },
                            }
                          : {
                              href: `/#${item.toLowerCase()}`,
                            })}
                      >
                        {item}
                        {currentPage === index && <Line />}
                      </DynamicTag>
                    </MobileMenuListItem>
                  ))}
                </MobileMenuList>
              </MenuPanel>
            )}
          </>
        )}
      </Container>
    </NavbarWrapper>
  );
};
