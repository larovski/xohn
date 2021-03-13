import React, { useEffect, useRef, useState, useContext } from "react";
import { Header } from "components/theme";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import intro from "assets/videos/xohn.mp4";
import styled from "styled-components";
import { Percentage, Text, Details } from "./styles";
import { ThemeContext } from "providers/ThemeProvider";

const VideoWrapper = styled.div`
  width: 100vw;
  height: auto;
  padding-top: 62px;
  position: relative;
  left: 0 !important;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    width: auto;
    height: 100vh;

    video {
      margin-top: 150px;
      max-height: 60%;
      object-fit: cover;
    }
  }

  @media (max-width: 960px) {
    width: auto;
    height: 100vh;

    video {
      float: right;
    }
  }
`;

export const IntroVideo = () => {
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
      intvalue <= 100 ? setCount(intvalue) : setCount(100);
      intvalue > 100 ? setShowText(true) : setShowText(false);
    }, 33.3);
  }, []);

  return (
    <>
      <Header />
      <VideoWrapper ref={IntroVideoRef}>
        <Details theme={theme}>
          <Percentage>{count + "%"}</Percentage>
          {showText && (
            <Text>
              der Einkäufer sagt, dass Augmented Reality Sie in ihrer
              Kaufbereitschaft bestärkt, das richtige Produkt zu kaufen.
            </Text>
          )}
        </Details>
        <video id="video" ref={videoRef}>
          <source src={intro} type="video/mp4" />
          <track kind="captions" />
        </video>
      </VideoWrapper>
    </>
  );
};
