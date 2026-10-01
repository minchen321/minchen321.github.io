import React from 'react';
import {
  ContactModalWrapper,
  ModalContainer,
  ContactForm,
  SubmitButton,
} from './styles';

export const ContactModal = ({ setShowContactModal }) => {
  const hasSubmitted = React.useRef(false);

  React.useEffect(() => {
    const handlePageShow = () => {
      if (hasSubmitted.current) setShowContactModal(false);
    };

    // Browser history can restore the open modal after a Formspree submission.
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, [setShowContactModal]);

  return (
    <ContactModalWrapper
      label="Send a Message"
      onClose={() => setShowContactModal(false)}
      enterAnimation="animate__slideInUp"
      exitAnimation="animate__slideOutDown"
      exitDuration={800}
    >
      <ModalContainer>
        <div className="modal-content">
          <h2>Send a Message</h2>
          <ContactForm
            method="post"
            action="https://formspree.io/f/mjvpygby"
            onSubmit={() => {
              hasSubmitted.current = true;
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="textarea-message">Message:</label>
              <textarea
                name="message"
                className="form-control"
                id="textarea-message"
                rows="5"
                required
              ></textarea>
            </div>
            <SubmitButton type="submit" name="submit" value="Submit">
              Submit
            </SubmitButton>
          </ContactForm>
        </div>
      </ModalContainer>
    </ContactModalWrapper>
  );
};
