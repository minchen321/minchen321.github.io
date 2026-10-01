import React from 'react';
import { Instagram, Linkedin, Mail, Github } from './assets';
import {
  Section,
  Phone,
  PhoneContent,
  Title,
  SocialMediaContainer,
  SocialMediaLink,
} from './styles';

export const Contact = ({
  setShowContactModal,
  isActive,
  isCurrent = true,
}) => {
  const phoneRef = React.useRef(null);

  React.useEffect(() => {
    const phone = phoneRef.current;
    if (!phone) return;

    if (isActive) {
      phone.classList.remove('animate__slideInUp');
      void phone.offsetWidth;
      phone.classList.add('animate__slideInUp');
    } else {
      phone.classList.remove('animate__slideInUp');
    }
  }, [isActive]);

  return (
    <Section
      id="contact"
      aria-label="Contact"
      tabIndex={-1}
      aria-hidden={!isCurrent}
      inert={isCurrent ? undefined : ''}
    >
      <Phone ref={phoneRef} className="animate__animated animate__slideInUp">
        <PhoneContent>
          <Title>Contact</Title>
          <SocialMediaContainer>
            <SocialMediaLink
              as="button"
              type="button"
              onClick={() => setShowContactModal(true)}
              aria-label="Send an email"
              aria-haspopup="dialog"
              data-category="contact-email"
            >
              <img src={Mail} alt="Email" />
            </SocialMediaLink>
            <SocialMediaLink
              href="https://www.linkedin.com/in/minchen321"
              aria-label="LinkedIn (opens in a new tab)"
              target="_blank"
              data-category="contact-linkedin"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" />
            </SocialMediaLink>
            <SocialMediaLink
              href="https://www.instagram.com/min75208/?hl=en"
              aria-label="Instagram (opens in a new tab)"
              target="_blank"
              data-category="contact-instagram"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </SocialMediaLink>
            <SocialMediaLink
              href="https://github.com/minchen321"
              aria-label="GitHub (opens in a new tab)"
              target="_blank"
              data-category="contact-github"
              rel="noreferrer"
            >
              <img src={Github} alt="GitHub" />
            </SocialMediaLink>
          </SocialMediaContainer>
        </PhoneContent>
      </Phone>
    </Section>
  );
};
