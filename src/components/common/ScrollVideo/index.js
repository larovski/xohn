import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import intro from "assets/videos/xohn.mp4";
import styled from "styled-components";
// import { Video } from "components/common";

const VideoWrapper = styled.div`
  height: 100vh;
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 99;
  }
`;

export const ScrollVideo = () => (
  <div>
    <Controller>
      <Scene duration={9000} pin>
        <VideoWrapper>
          <video muted>
            <source src={intro} type="video/mp4" />
          </video>
        </VideoWrapper>
      </Scene>
    </Controller>
  </div>
);
