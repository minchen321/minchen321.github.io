import React from 'react';
import { CloseIcon } from './assets'
import {
  ContactModalWrapper,
  CloseModalBtn,
  ModalContainer,
  ContactForm,
  SubmitButton,
} from './styles';

export const ContactModal = ({ setShowContactModal }) => {
  const [startSlideOut, setStartSlideOut] = React.useState(false);
  const handleCloseModal = () => {
    setStartSlideOut(true);
    setTimeout(() => {
      setShowContactModal(false);
    }, 850);
  };

  return (
    <ContactModalWrapper
      className={`wow animate__animated ${
        startSlideOut
          ? 'animate__fast animate__slideOutDown'
          : 'animate__faster animate__slideInUp'
      }`}
    >
      <CloseModalBtn onClick={handleCloseModal}>
        <img
          src={CloseIcon}
          alt="close button"
        />
      </CloseModalBtn>
      <ModalContainer>
        <div className="modal-content">
          <h2>Send a Message</h2>
          <ContactForm
            method="post"
            action="https://formspree.io/f/mjvpygby"
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
            <SubmitButton
              type="submit"
              name="submit"
              value="Submit"
            >
                Submit
            </SubmitButton>
          </ContactForm>
        </div>
      </ModalContainer>
    </ContactModalWrapper>
  );

};
