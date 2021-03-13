import styled from "styled-components";
import overlayIllustration from "assets/illustrations/overlay.svg";

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  /* background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat; */
  background-color: #efebe7;
`;

export const IntroWrapper = styled.div`
  position: fixed;
  top: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  min-height: 650px;
  width: 100%;

  @media (max-width: 960px) {
    position: relative;
    min-height: 550px;
    flex-direction: column;
  }
`;

export const Percentage = styled.div`
  font-size: 100px;
  margin-bottom: auto;
  color: #212121;
  font-weight: 800;
  @media (max-width: 480px) {
    font-size: 70px;
  }
`;

export const Text = styled.p`
  line-height: 2em;
  color: #212121;

  @media (max-width: 480px) {
    font-size: 13px;
    width: 70%;
  }
`;

export const Details = styled.div`
  position: absolute;
  top: 30%;
  width: 50%;
  z-index: 1;
  padding-left: 10rem;
  min-height: 300px;

  @media (max-width: 480px) {
    top: 0;
    left: 0;
    width: 100%;
    padding: 100px 0 0;
    margin-left: 20px;
    min-height: 100px;
  }

  @media (max-width: 960px) {
    width: 70%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 30pt;
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#EFEBE7")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#e6e6e6")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
