import React from "react";
import styled from "styled-components";

const VideoComponentWraper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
`;

export const Video = props => {
  return (
    <VideoComponentWraper>
      <VideoComponent
        videoSrcURL={props.videoSrcURL}
        videoTitle={props.videoTitle}
        ref={props.ref}
      />
    </VideoComponentWraper>
  );
};

const VideoWrapper = styled.div`
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const VideoComponent = ({ ref, videoSrcURL, onEnd }) => {
  return (
    <VideoWrapper>
      {/* <video id="video">
        <source ref={ref} src={videoSrcURL} type="video/mp4" />
      </video> */}
    </VideoWrapper>
  );
};
