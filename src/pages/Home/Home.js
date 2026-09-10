import React, { Fragment } from 'react';
import ReactPageScroller from 'react-page-scroller';
import { Navbar, Footer } from '../../components';
import { Portfolio, Contact, ContactModal } from './Sections';
import { Section, ScrollableContainer } from './homeStyles';

const SHORT_VIEWPORT_HEIGHT = 500;

export const Home = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [showContactModal, setShowContactModal] = React.useState(false);
  const [isShortViewport, setIsShortViewport] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsShortViewport(window.innerHeight < SHORT_VIEWPORT_HEIGHT);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when contact modal is open
  React.useEffect(() => {
    document.body.style.overflow = showContactModal ? 'hidden' : 'auto';
  }, [showContactModal]);

  // Get the current page from the URL hash on initial load
  React.useEffect(() => {
    const sectionIdMap = {
      '#home': 0,
      '#about': 1,
      '#portfolio': 2,
      '#contact': 3,
    };
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setCurrentPage(sectionIdMap[hash] || 0);
  }, []);

  // Handle page change from the navbar
  const handlePageChange = React.useCallback((number) => {
    setCurrentPage(number);
  }, []);

  return (
    <Fragment>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {isShortViewport ? (
          <ScrollableContainer>
            <Section>
              <p>Content for page 1</p>
            </Section>
            <Section>
              <p>Content for page 2</p>
            </Section>
            <Portfolio isShortViewport={isShortViewport} />
            <Contact
              setShowContactModal={setShowContactModal}
              isActive={true}
            />
            <Footer />
          </ScrollableContainer>
        ) : (
          <ReactPageScroller
            containerHeight={'calc(100vh - 3.5rem)'}
            pageOnChange={handlePageChange}
            // onBeforePageScroll={handlePageChange}
            customPageNumber={currentPage}
            animationTimer={600}
            animationTimerBuffer={300}
          >
            <Section>
              <p>Content for page 1</p>
            </Section>
            <Section>
              <p>Content for page 2</p>
            </Section>
            <Portfolio />
            <Contact
              setShowContactModal={setShowContactModal}
              isActive={currentPage === 3}
            />
          </ReactPageScroller>
        )}
        {showContactModal && (
          <ContactModal setShowContactModal={setShowContactModal} />
        )}
        {!isShortViewport && currentPage === 3 && <Footer />}
      </main>
    </Fragment>
  );
};
