import React from 'react';
import theme from '../../../../theme';
import {
  Arrow,
  AboutBgLeft,
  AboutBgRight,
  Min,
  MinMobile,
  SelfPortrait,
  BackBtnLeft,
  BackBtnRight,
} from './assets';
import {
  Section,
  Title,
  MenuPanel,
  LeftBubble,
  RightBubble,
  CodingPanel,
  CoderIntro,
  SideImg,
  PersonalPanel,
  PersonalSideImg,
  SelfIntro,
  IntroContent,
  BackButton,
  BgImgContainer,
  AboutBgLeftImg,
  AboutBgRightImg,
} from './styles';

const PANELS = { MENU: 'menu', CODING: 'coding', PERSONAL: 'personal' };
const EXIT_TIMEOUT = 1000; // Safety net if animationend never fires
const MAX_BG_OFFSET = 32; // Total travel range
const MAX_BUBBLE_OFFSET = 16; // Total travel range
const PARALLAX_SPLIT_INSET = 32;
const NO_PARALLAX = {
  bgLeft: { x: 0, y: 0 },
  bgRight: { x: 0, y: 0 },
  bubbleLeft: { x: 0, y: 0 },
  bubbleRight: { x: 0, y: 0 },
};

const translate = ({ x, y }) => ({ transform: `translate(${x}px, ${y}px)` });

export const About = ({ onContactClick }) => {
  const [activePanel, setActivePanel] = React.useState(PANELS.MENU);
  const [exitingPanel, setExitingPanel] = React.useState(null);
  const [direction, setDirection] = React.useState('right');
  const [parallax, setParallax] = React.useState(NO_PARALLAX);
  const [isParallaxEnabled, setIsParallaxEnabled] = React.useState(false);
  const sectionRef = React.useRef(null);
  const exitTimerRef = React.useRef(null);

  // Mirrors the breakpoint that reveals the parallax layers in styles.js
  React.useEffect(() => {
    const query = window.matchMedia(`(min-width: ${theme.md})`);
    const handleChange = ({ matches }) => {
      setIsParallaxEnabled(matches);
      if (!matches) setParallax(NO_PARALLAX);
    };

    handleChange(query);
    query.addEventListener('change', handleChange);

    return () => query.removeEventListener('change', handleChange);
  }, []);

  // Warm the photo so it is decoded before the panel slides in
  React.useEffect(() => {
    const preload = new Image();
    preload.src = window.matchMedia(`(min-width: ${theme.sm})`).matches
      ? Min
      : MinMobile;
  }, []);

  const handleSectionMouseMove = (e) => {
    const section = sectionRef.current;
    if (!section || !isParallaxEnabled) return;
    if (activePanel !== PANELS.MENU) return;

    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const splitX = rect.width / 2 - PARALLAX_SPLIT_INSET;
    const isLeftHalf = x <= splitX;
    const percentX = isLeftHalf
      ? x / splitX - 0.5
      : (x - splitX) / (rect.width - splitX) - 0.5;
    const percentY = y / rect.height - 0.5;

    const bg = { x: percentX * MAX_BG_OFFSET, y: percentY * MAX_BG_OFFSET };
    const bubble = {
      x: -percentX * MAX_BUBBLE_OFFSET,
      y: -percentY * MAX_BUBBLE_OFFSET,
    };

    setParallax(
      isLeftHalf
        ? { ...NO_PARALLAX, bgLeft: bg, bubbleLeft: bubble }
        : { ...NO_PARALLAX, bgRight: bg, bubbleRight: bubble }
    );
  };

  const handleSectionMouseLeave = () => setParallax(NO_PARALLAX);

  const clearExitingPanel = () => {
    window.clearTimeout(exitTimerRef.current);
    exitTimerRef.current = null;
    setExitingPanel(null);
  };

  React.useEffect(() => () => window.clearTimeout(exitTimerRef.current), []);

  const navigateTo = (panel, exitDirection) => {
    window.clearTimeout(exitTimerRef.current);
    setParallax(NO_PARALLAX);
    setDirection(exitDirection);
    setExitingPanel(activePanel);
    setActivePanel(panel);
    exitTimerRef.current = window.setTimeout(clearExitingPanel, EXIT_TIMEOUT);
  };

  const handleContactClick = (e) => {
    if (!onContactClick) return;
    e.preventDefault();
    onContactClick();
  };

  const handleAnimationEnd = (e) => {
    if (e.target.dataset.panel === exitingPanel) clearExitingPanel();
  };

  const slideOutClass =
    direction === 'right' ? 'animate__slideOutRight' : 'animate__slideOutLeft';
  const slideInClass =
    direction === 'right' ? 'animate__slideInLeft' : 'animate__slideInRight';

  const panelClassName = (panel) => {
    if (exitingPanel === panel) {
      return `is-exiting animate__animated ${slideOutClass}`;
    }
    if (activePanel === panel) return `animate__animated ${slideInClass}`;
    return '';
  };

  const isVisible = (panel) => activePanel === panel || exitingPanel === panel;

  return (
    <Section
      id="about"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      onAnimationEnd={handleAnimationEnd}
    >
      {isVisible(PANELS.MENU) && (
        <MenuPanel
          className={panelClassName(PANELS.MENU)}
          data-panel={PANELS.MENU}
        >
          <Title>About Me</Title>
          <BgImgContainer>
            <AboutBgLeftImg
              src={AboutBgLeft}
              alt=""
              style={translate(parallax.bgLeft)}
            />
            <AboutBgRightImg
              src={AboutBgRight}
              alt=""
              style={translate(parallax.bgRight)}
            />
          </BgImgContainer>
          <LeftBubble
            onClick={() => navigateTo(PANELS.CODING, 'right')}
            data-category="role-read-more"
            style={translate(parallax.bubbleLeft)}
          >
            <p>
              I&#39;m a UX Engineer
              <br />
              and Designer. <Arrow className="more-link" aria-hidden="true" />
            </p>
          </LeftBubble>
          <RightBubble
            onClick={() => navigateTo(PANELS.PERSONAL, 'left')}
            data-category="min-read-more"
            style={translate(parallax.bubbleRight)}
          >
            <p>
              I&#39;m Min. <Arrow className="more-link" aria-hidden="true" />
            </p>
          </RightBubble>
        </MenuPanel>
      )}

      {isVisible(PANELS.CODING) && (
        <CodingPanel
          className={panelClassName(PANELS.CODING)}
          data-panel={PANELS.CODING}
        >
          <CoderIntro>
            <p>
              With a background in interaction design, my expertise lies in
              bridging the gap between design and engineering, combining a
              strong eye for visual details. I enjoy turning complex ideas into
              polished products. I&#39;m particularly passionate about creating
              maintainable front-end architectures and improving user
              experiences through experimentation and thoughtful design.
            </p>
            <BackButton
              className="left-back"
              onClick={() => navigateTo(PANELS.MENU, 'left')}
              data-category="about-back-btn"
            >
              <img src={BackBtnRight} alt="back button" />
            </BackButton>
          </CoderIntro>
          <SideImg>
            <img src={SelfPortrait} alt="self illustration" />
          </SideImg>
        </CodingPanel>
      )}

      {isVisible(PANELS.PERSONAL) && (
        <PersonalPanel
          className={panelClassName(PANELS.PERSONAL)}
          data-panel={PANELS.PERSONAL}
        >
          <PersonalSideImg>
            <picture>
              <source srcSet={Min} media={`(min-width: ${theme.sm})`} />
              <img src={MinMobile} alt="Min" />
            </picture>
          </PersonalSideImg>
          <SelfIntro>
            <IntroContent>
              <p>
                I’m currently based in LA, and when I’m not working, you can
                usually find me looking for the new adventures or hunting for a
                bowl of noodles.
              </p>
              <p>
                I’ve had the opportunity to build web experiences at companies
                like SoFi and Amazon, combining my passion for design and
                technology to create engaging digital products. If you have any
                cool projects,{' '}
                <a
                  href="#contact"
                  className="text-link"
                  onClick={handleContactClick}
                  data-category="about-contact-link"
                >
                  let&#39;s get in touch!
                </a>
              </p>
            </IntroContent>
            <BackButton
              className="right-back"
              onClick={() => navigateTo(PANELS.MENU, 'right')}
              data-category="about-back-btn"
            >
              <img src={BackBtnLeft} alt="back button" />
            </BackButton>
          </SelfIntro>
        </PersonalPanel>
      )}
    </Section>
  );
};
