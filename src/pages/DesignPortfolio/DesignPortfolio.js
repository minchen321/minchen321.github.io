import React, { Fragment } from 'react';
import { Navbar, Footer } from '../../components';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { usePageTitle } from '../../hooks/usePageTitle';
import { PROJECTS, MODAL_ASSETS } from './assets';
import {
  Section,
  Container,
  ProjectPageTitle,
  ProjectGroup,
  ProjectContent,
  AboutProject,
  ProjectModal,
  ProjectModalContent,
} from './styles';

export const DesignPortfolio = () => {
  usePageTitle('Design Projects | Min Chen');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [modalType, setModalType] = React.useState(null);

  return (
    <Fragment>
      <Navbar currentPage={2} isScrollable={false} />
      <main id="main-content" tabIndex={-1}>
        <Section>
          <Container>
            <ProjectPageTitle>Design Projects</ProjectPageTitle>
            <div className="project-list">
              {PROJECTS.map((project, index) => (
                <ProjectGroup key={project.key}>
                  <button
                    aria-label={`View project: ${project.title}`}
                    aria-haspopup="dialog"
                    data-project={project.key}
                    data-category={project.btnCategory}
                    onClick={() => setModalType(project.key)}
                  >
                    <picture>
                      <img
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        src={project.img.src}
                        alt={project.img.alt}
                        className={project.img.className}
                      />
                    </picture>
                  </button>

                  <ProjectContent>
                    <AboutProject>
                      <h2>{project.title}</h2>
                      <p className="project-type">{project.type}</p>
                      <p className="project-desc">{project.desc}</p>
                      <button
                        className="view-btn open-project-modal"
                        aria-label={`View project: ${project.title}`}
                        aria-haspopup="dialog"
                        data-project={project.key}
                        data-category={project.btnCategory}
                        onClick={() => setModalType(project.key)}
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
            label={PROJECTS.find(({ key }) => key === modalType).title}
            onClose={() => setModalType(null)}
          >
            <ProjectModalContent id={`${modalType}-modal-content`}>
              {MODAL_ASSETS[modalType].map((media, idx) =>
                media.type === 'img' ? (
                  <img
                    key={media.src}
                    src={media.src}
                    alt={media.alt}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                ) : (
                  <video
                    key={media.src}
                    aria-label={media.alt}
                    autoPlay={!reducedMotion}
                    controls
                    muted
                    loop
                    playsInline
                  >
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
