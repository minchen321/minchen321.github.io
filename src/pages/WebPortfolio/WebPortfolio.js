import React, { Fragment, useState } from 'react';
import MuxPlayer from '@mux/mux-player-react';
import Slider from 'react-slick';
import { Navbar, Footer } from '../../components';
import theme from '../../theme';
import LeftArrow from './assets/left-arrow.svg';
import RightArrow from './assets/right-arrow.svg';
import {
  Main,
  VideoWrapper,
  PageTite,
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
      onClick={onClick}
      className={left ? 'left-arrow' : 'right-arrow'}
    >
      <img src={left ? LeftArrow : RightArrow} />
    </ArrowButton>
  );
};

export const WebPortfolio = () => {
  React.useEffect(() => {}, []);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const ASSETS = [
    {
      title: 'Paper Girls',
      subtitle: 'Premium Title Page',
      playbackId: '4lqPFMjSy1e7rcHQnmHrFRHKQIEL8eyf7ihH8XWnMNM',
      // Seconds into the video; Mux uses this frame as the poster thumbnail.
      posterTime: 5,
    },
    {
      title: 'San Diego Comic - Con',
      subtitle: 'IMDb Poll',
      playbackId: 'K02o2CDU6Zy3bt4Z4CPmodgapLs7r02MAQYhQLO5lErCU',
      posterTime: 1,
    },
    {
      title: 'The Boys',
      subtitle: 'Premium Title Page',
      playbackId: 'dG64cigWlzLLYIB02Toh1dS8mw3SCBaVA5FJjaADJkgs',
      posterTime: 3,
    },
    {
      title: 'Dune',
      subtitle: 'Premium Title Page',
      playbackId: 'ZZTPZ17LhthT02RTYOS01bMTFYOoWZ8tIpTR2BxWgja02s',
      posterTime: 1,
    },
    {
      title: 'Encanto',
      subtitle: 'Premium Title Page',
      playbackId: '6HL8GVWD47t5ypAefSBz00wOYBzJE1ADYeFWrJcvzbXE',
      posterTime: 6,
    },
    {
      title: 'From',
      subtitle: 'Premium Title Page',
      playbackId: 'M02KvGcs025trvItk1SB501yEWJplGioLyTjckORLxJSYE',
      posterTime: 7,
    },
    {
      title: 'Emmys Ballot',
      subtitle: 'Special Section',
      playbackId: '9Q7AfO00aHV8TQ00cbUeKKQblBEPfnagADSNvKJTnEzhc',
      posterTime: 1,
    },
    {
      title: 'The Wheel of Time',
      subtitle: 'Premium Title Page',
      playbackId: 'FvZ02V73EKzh788VIy2fTZe7bARrmdiI9nKtIAQJh8Ps',
      posterTime: 1,
    },
    {
      title: "Oscars' Ballot",
      subtitle: 'Video Wall',
      playbackId: 'FLwzRiEtv8lKkOsNOOuktg5ReO6oC00aLVU8xy7xKye8',
      posterTime: 4,
    },
  ];

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    dots: false,
    slidesToScroll: 1,
    centerPadding: '28%',
    nextArrow: <Arrow left={false} />,
    prevArrow: <Arrow left={true} />,
    beforeChange: (current, next) => setCurrentSlideIndex(next),
    responsive: [
      {
        breakpoint: parseInt(theme.md, 10),
        settings: {
          centerPadding: '15%',
        },
      },
    ],
  };

  return (
    <Fragment>
      <Navbar currentPage={2} isScrollable={false} />
      <Main>
        <TitleContainer>
          <PageTite>Web Projects</PageTite>
          <p>
            I&#39;m proud to partner with talented designers to translate
            creative design into polished, functional front-end experiences.
          </p>
        </TitleContainer>
        <Container>
          <SliderWrapper>
            <Slider {...settings}>
              {ASSETS.map((item, i) => (
                <Slide key={item}>
                  <VideoWrapper>
                    <MuxPlayer
                      preload="none"
                      // autoPlay={true}
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
                  <h3
                    className={`animate__animated ${
                      currentSlideIndex === i
                        ? 'animate__fadeIn'
                        : 'animate__fadeOut'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <h4
                    className={`animate__animated ${
                      currentSlideIndex === i
                        ? 'animate__fadeIn'
                        : 'animate__fadeOut'
                    }`}
                  >
                    {item.subtitle}
                  </h4>
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
