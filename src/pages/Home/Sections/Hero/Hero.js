import React from 'react';
import { HelicopterImg } from './assets';
import { Section, Helicopter, IntroTitle } from './styles';

const INTRO_MESSAGES = [
  "Hi! I'm Min.",
  "I'm a UX Engineer and Designer based in Los Angeles.",
];
const INTRO_DESCRIPTION = INTRO_MESSAGES.join(' ');
const TYPE_DELAY = 70;
const DELETE_DELAY = 20;
const PAUSE_DELAY = 1300;
const START_DELAY = 100;

export const Hero = ({ isShortViewport = false, isActive = true }) => {
  const [introText, setIntroText] = React.useState('');

  React.useEffect(() => {
    if (!isActive) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    let messageIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;

    const typeNextCharacter = () => {
      const message = INTRO_MESSAGES[messageIndex];
      characterIndex += isDeleting ? -1 : 1;
      setIntroText(message.slice(0, characterIndex));

      let delay = isDeleting ? DELETE_DELAY : TYPE_DELAY;

      if (!isDeleting && characterIndex === message.length) {
        isDeleting = true;
        delay = PAUSE_DELAY;
      } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % INTRO_MESSAGES.length;
        delay = START_DELAY;
      }

      timer = window.setTimeout(typeNextCharacter, delay);
    };

    const handleMotionChange = () => {
      window.clearTimeout(timer);
      messageIndex = 0;
      characterIndex = 0;
      isDeleting = false;
      setIntroText(motionQuery.matches ? INTRO_DESCRIPTION : '');

      if (!motionQuery.matches) {
        timer = window.setTimeout(typeNextCharacter, START_DELAY);
      }
    };

    handleMotionChange();
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.clearTimeout(timer);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, [isActive]);

  return (
    <Section id="home" $isShortViewport={isShortViewport}>
      <Helicopter aria-hidden="true" $isActive={isActive}>
        <img src={HelicopterImg} alt="" />
      </Helicopter>
      <IntroTitle aria-label={INTRO_DESCRIPTION}>
        <span className="intro-placeholder" aria-hidden="true">
          {INTRO_MESSAGES[1]}
        </span>
        <span aria-hidden="true">{introText}</span>
      </IntroTitle>
    </Section>
  );
};
