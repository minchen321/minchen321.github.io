import React, { Fragment, useState } from 'react';
import MuxPlayer from '@mux/mux-player-react';
import Slider from 'react-slick';
import { Navbar, Footer } from '../../components';
import theme from '../../theme';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { usePageTitle } from '../../hooks/usePageTitle';
import { WEB_PROJECTS } from './projects';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from './assets/left-arrow.svg';
import RightArrow from './assets/right-arrow.svg';
import {
  Main,
  VideoWrapper,
  ProjectPageTitle,
  TitleContainer,
  Container,
  SliderWrapper,
  Slide,
  ArrowButton,
} from './styles';

export const Arrow = (props) => {
  const { onClick, left } = props;
  return (
    <ArrowButton
      type="button"
      aria-label={left ? 'Previous project' : 'Next project'}
      onClick={onClick}
      className={left ? 'left-arrow' : 'right-arrow'}
    >
      <img src={left ? LeftArrow : RightArrow} alt="" />
    </ArrowButton>
  );
};

export const WebPortfolio = () => {
  usePageTitle('Web Projects | Min Chen');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = React.useRef(null);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isTablet = useMediaQuery(`(min-width: ${theme.sm})`);
  const isDesktop = useMediaQuery(`(min-width: ${theme.md})`);
  const centerPadding = isDesktop ? '28%' : isTablet ? '15%' : '12%';

  const handleSlideChange = (current, next) => {
    sliderRef.current?.querySelectorAll('mux-player').forEach((player) => {
      player.pause();
    });
    setCurrentSlideIndex(next);
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: reducedMotion ? 0 : 500,
    dots: false,
    slidesToScroll: 1,
    centerPadding,
    nextArrow: <Arrow left={false} />,
    prevArrow: <Arrow left={true} />,
    beforeChange: handleSlideChange,
  };

  return (
    <Fragment>
      <Navbar currentPage={2} isScrollable={false} />
      <Main id="main-content" tabIndex={-1}>
        <TitleContainer>
          <ProjectPageTitle>Web Projects</ProjectPageTitle>
          <p>
            I&#39;m proud to partner with talented designers to translate
            creative design into polished, functional front-end experiences.
          </p>
        </TitleContainer>
        <Container>
          <SliderWrapper
            ref={sliderRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Web projects"
          >
            <p className="sr-only" aria-live="polite" aria-atomic="true">
              {`Project ${currentSlideIndex + 1} of ${WEB_PROJECTS.length}: `}
              {WEB_PROJECTS[currentSlideIndex].title}
            </p>
            <Slider {...settings}>
              {WEB_PROJECTS.map((item, i) => (
                <Slide key={item.playbackId}>
                  <VideoWrapper>
                    <MuxPlayer
                      aria-label={`${item.title}: ${item.subtitle}`}
                      tabIndex={currentSlideIndex === i ? 0 : -1}
                      preload="none"
                      loop={true}
                      playbackId={item.playbackId}
                      poster={
                        `https://image.mux.com/${item.playbackId}` +
                        `/thumbnail.webp?time=${item.posterTime}`
                      }
                      accentColor={theme.primaryBlue}
                      className="video-player"
                    />
                  </VideoWrapper>
                  <h2
                    className={`project-title animate__animated ${
                      currentSlideIndex === i
                        ? 'animate__fadeIn'
                        : 'animate__fadeOut'
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`project-subtitle animate__animated ${
                      currentSlideIndex === i
                        ? 'animate__fadeIn'
                        : 'animate__fadeOut'
                    }`}
                  >
                    {item.subtitle}
                  </p>
                </Slide>
              ))}
            </Slider>
          </SliderWrapper>
        </Container>
        <Footer />
      </Main>
    </Fragment>
  );
};
