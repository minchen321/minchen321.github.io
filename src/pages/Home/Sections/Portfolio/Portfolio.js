import React from 'react';
import { DesignIllustration, WebIllustration } from './assets';
import { Section, Container, CardContainer, Card, CardTitle } from './styles';

export const Portfolio = ({ isShortViewport }) => {
  return (
    <Section id="portfolio">
      <Container>
        <CardContainer $isShortViewport={isShortViewport}>
          <Card href="/design-projects" data-category="design-portfolio">
            <img src={DesignIllustration} alt="design illustration" />
            <CardTitle>UI/UX Design</CardTitle>
          </Card>
        </CardContainer>
        <CardContainer $isShortViewport={isShortViewport}>
          <Card href="/web-projects" data-category="web-portfolio">
            <img src={WebIllustration} alt="web illustration" />
            <CardTitle>Front-End Development</CardTitle>
          </Card>
        </CardContainer>
      </Container>
    </Section>
  );
};
