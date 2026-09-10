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

export const Contact = ({ setShowContactModal, isActive }) => {
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
    <Section id="contact">
      <Phone
        ref={phoneRef}
        className="wow animate__animated animate__slideInUp"
      >
        <PhoneContent>
          <Title>Contact</Title>
          <SocialMediaContainer>
            <SocialMediaLink
              onClick={() => setShowContactModal(true)}
              aria-label="Email"
              data-category="contact-email"
            >
              <img src={Mail} alt="Email" />
            </SocialMediaLink>
            <SocialMediaLink
              href="https://www.linkedin.com/in/minchen321"
              aria-label="Linkedin"
              target="_blank"
              data-category="contact-linkedin"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" />
            </SocialMediaLink>
            <SocialMediaLink
              href="http://www.instagram.com/min75208/?hl=en"
              aria-label="Instagram"
              target="_blank"
              data-category="contact-instagram"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </SocialMediaLink>
            <SocialMediaLink
              href="http://github.com/minchen321"
              aria-label="GitHub"
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
