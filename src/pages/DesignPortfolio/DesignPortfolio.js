import React, { Fragment } from 'react';
import { Navbar, Footer } from '../../components';
import { PROJECTS, MODAL_ASSETS, CloseIcon } from './assets';
import {
  Section,
  Container,
  PageTite,
  ProjectGroup,
  ProjectContent,
  AboutProject,
  ProjectModal,
  ProjectModalContent,
  ModalCloseButton,
} from './styles';

export const DesignPortfolio = () => {
  const [modalType, setModalType] = React.useState(null);
  const [startSlideOut, setStartSlideOut] = React.useState(false);

  // Prevent body scroll when contact modal is open
  React.useEffect(() => {
    document.body.style.overflow = modalType ? 'hidden' : 'auto';
  }, [modalType]);

  const handleCloseModal = () => {
    setStartSlideOut(true);
    setTimeout(() => {
      setModalType(null);
    }, 300);
  };

  const handleOpenModal = (name) => {
    setStartSlideOut(false);
    setModalType(name);
  };

  return (
    <Fragment>
      <Navbar currentPage={2} isScrollable={false} />
      <main>
        <Section>
          <Container>
            <PageTite>Design Projects</PageTite>
            <div className="project-list">
              {PROJECTS.map((project) => (
                <ProjectGroup key={project.key}>
                  <button
                    data-project={project.key}
                    data-category={project.btnCategory}
                    onClick={() => handleOpenModal(project.key)}
                  >
                    <picture>
                      <img
                        src={project.img.src}
                        alt={project.img.alt}
                        className={project.img.className}
                      />
                    </picture>
                  </button>

                  <ProjectContent>
                    <AboutProject>
                      <h3>{project.title}</h3>
                      <p className="project-type">{project.type}</p>
                      <p className="project-desc">{project.desc}</p>
                      <button
                        className="view-btn open-project-modal"
                        data-project={project.key}
                        data-category={project.btnCategory}
                        onClick={() => handleOpenModal(project.key)}
                      >
                        View Project
                      </button>
                    </AboutProject>
                  </ProjectContent>
                </ProjectGroup>
              ))}
            </div>
          </Container>
        </Section>

        {modalType && (
          <ProjectModal
            className={`animate__animated ${
              startSlideOut
                ? 'animate__faster animate__fadeOut'
                : 'animate__fast animate__fadeIn'
            }`}
          >
            <ModalCloseButton
              data-category="close-project-modal"
              onClick={handleCloseModal}
            >
              <img src={CloseIcon} alt="close button" />
            </ModalCloseButton>
            <ProjectModalContent id={`${modalType}-modal-content`}>
              {MODAL_ASSETS[modalType].map((media, idx) =>
                media.type === 'img' ? (
                  <img key={idx} src={media.src} alt={media.alt} />
                ) : (
                  <video key={idx} autoPlay muted loop playsInline>
                    <source src={media.src} type="video/mp4" />
                    {media.alt}
                  </video>
                )
              )}
            </ProjectModalContent>
          </ProjectModal>
        )}
        <Footer />
      </main>
    </Fragment>
  );
};
