import React, { Fragment } from 'react';
import ReactPageScroller from 'react-page-scroller';
import { Navbar, Footer } from '../../components';
import { Hero, About, Portfolio, Contact, ContactModal } from './Sections';
import { HomeMain, ScrollableContainer } from './homeStyles';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useSectionWheel } from '../../hooks/useSectionWheel';
import { usePageTracking } from '../../hooks/usePageTracking';
import { HOME_SECTIONS, getPageFromHash } from '../../navigation';

const CONTACT_PAGE = 3;

export const Home = () => {
  usePageTracking('Min Chen | UX Engineer and Designer');
  const [currentPage, setCurrentPage] = React.useState(getPageFromHash);
  const [showContactModal, setShowContactModal] = React.useState(false);
  const isShortViewport = useMediaQuery('(max-height: 499px)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const scrollRef = useSectionWheel(!isShortViewport);

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const focused = document.activeElement;
      if (scrollRef.current?.contains(focused) && focused.closest('[inert]')) {
        document.getElementById(HOME_SECTIONS[currentPage].id)?.focus({
          preventScroll: true,
        });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [currentPage, scrollRef]);

  React.useEffect(() => {
    const handleHashChange = () => setCurrentPage(getPageFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToPage = React.useCallback((number) => {
    const element = document.getElementById(HOME_SECTIONS[number]?.id);
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    element?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  }, []);

  React.useEffect(() => {
    if (isShortViewport) scrollToPage(currentPage);
  }, [isShortViewport, currentPage, scrollToPage]);

  const handlePageChange = (number) => {
    setCurrentPage(number);
    if (isShortViewport && number === currentPage) scrollToPage(number);
  };

  return (
    <Fragment>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <HomeMain
        id="main-content"
        tabIndex={-1}
        ref={scrollRef}
        onKeyDownCapture={(event) => {
          if (
            ['ArrowUp', 'ArrowDown'].includes(event.key) &&
            event.target.closest('input, textarea, select, [contenteditable]')
          ) {
            event.stopPropagation();
          }
        }}
      >
        {isShortViewport ? (
          <ScrollableContainer>
            <Hero isShortViewport={isShortViewport} />
            <About onContactClick={() => handlePageChange(CONTACT_PAGE)} />
            <Portfolio isShortViewport={isShortViewport} />
            <Contact
              setShowContactModal={setShowContactModal}
              isActive={true}
            />
            <Footer />
          </ScrollableContainer>
        ) : (
          <ReactPageScroller
            containerHeight="var(--home-page-height)"
            pageOnChange={setCurrentPage}
            customPageNumber={currentPage}
            animationTimer={reducedMotion ? 0 : 600}
            animationTimerBuffer={300}
          >
            <Hero isActive={currentPage === 0} />
            <About
              isCurrent={currentPage === 1}
              onContactClick={() => handlePageChange(CONTACT_PAGE)}
            />
            <Portfolio isCurrent={currentPage === 2} />
            <Contact
              setShowContactModal={setShowContactModal}
              isActive={currentPage === CONTACT_PAGE}
              isCurrent={currentPage === CONTACT_PAGE}
            />
          </ReactPageScroller>
        )}
        {showContactModal && (
          <ContactModal setShowContactModal={setShowContactModal} />
        )}
        {!isShortViewport && currentPage === CONTACT_PAGE && <Footer />}
      </HomeMain>
    </Fragment>
  );
};
