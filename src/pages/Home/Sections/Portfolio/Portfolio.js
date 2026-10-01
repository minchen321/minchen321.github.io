import React from 'react';
import { DesignIllustration, WebIllustration } from './assets';
import { Section, Container, CardContainer, Card, CardTitle } from './styles';

export const Portfolio = ({ isShortViewport, isCurrent = true }) => {
  return (
    <Section
      id="portfolio"
      aria-label="Portfolio"
      tabIndex={-1}
      aria-hidden={!isCurrent}
      inert={isCurrent ? undefined : ''}
    >
      <h2 className="sr-only">Portfolio</h2>
      <Container>
        <CardContainer $isShortViewport={isShortViewport}>
          <Card href="/design-projects" data-category="design-portfolio">
            <img src={DesignIllustration} alt="" />
            <CardTitle>UI/UX Design</CardTitle>
          </Card>
        </CardContainer>
        <CardContainer $isShortViewport={isShortViewport}>
          <Card href="/web-projects" data-category="web-portfolio">
            <img src={WebIllustration} alt="" />
            <CardTitle>Front-End Development</CardTitle>
          </Card>
        </CardContainer>
      </Container>
    </Section>
  );
};
