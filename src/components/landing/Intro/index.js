import React, { useEffect, useRef, useState, useContext } from "react";
import { Header } from "components/theme";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import intro from "assets/videos/xohn.mp4";
import styled from "styled-components";
import { Percentage, Text, Details } from "./styles";
import { ThemeContext } from "providers/ThemeProvider";

const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  left: 0 !important;
  padding: 0 !important;
  background-color: #efebe7;

  video {
    width: 100%;
    object-fit: cover;
    height: 100vh;
  }

  @media (max-width: 960px) {
    width: auto;
    video {
      float: right;
    }
  }

  @media (max-width: 480px) {
    height: 100vh;
    width: 100vw;

    video {
      margin-top: 150px;
      max-height: 70%;
      height: fit-content;
      object-fit: cover;
    }
  }
`;

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const IntroVideoRef = useRef(null);
  const [count, setCount] = useState(0);
  const videoRef = useRef(null);
  const scrollPos = useRef(null);
  const delay = useRef(null);
  const [showText, setShowText] = useState();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    videoRef.current.currentTime = 0;

    ScrollTrigger.create({
      trigger: 0,
      scrub: true,
      pin: IntroVideoRef.current,
      start: "-10px top",
      end: "+=3500",
      markers: false,
      onUpdate: function (self) {
        if (videoRef.current) {
          scrollPos.current = self.progress * 10;
        }
      },
    });
    // ScrollTrigger.refresh();
  }, [IntroVideoRef, videoRef]);

  useEffect(() => {
    const accelamount = 0.1;
    delay.current = 0;
    setInterval(() => {
      delay.current += (scrollPos.current - delay.current) * accelamount;
      videoRef.current.currentTime = delay.current;
      var intvalue = Math.trunc(scrollPos.current * 15);
      intvalue <= 66 ? setCount(intvalue) : setCount(66);
      intvalue > 66 ? setShowText(true) : setShowText(false);
    }, 33.3);
  }, []);

  return (
    <>
      <Header />
      <VideoWrapper ref={IntroVideoRef}>
        <style>
          {`
          .pin-spacer {
           width: 100%!important;
          }
      `}
        </style>
        <Details theme={theme}>
          <Percentage>{count + "%"}</Percentage>
          {showText && (
            <Text>
              der Einkäufer sagt, dass Augmented Reality Sie in ihrer
              Kaufbereitschaft bestärkt, das richtige Produkt zu kaufen.
            </Text>
          )}
        </Details>
        <video ref={videoRef} autoPlay muted>
          <source src={intro} type="video/mp4" />
          <track kind="captions" />
        </video>
      </VideoWrapper>
    </>
  );
};
