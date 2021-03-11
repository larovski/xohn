import styled from "styled-components";
import overlayIllustration from "assets/illustrations/overlay.svg";

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  /* background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat; */
`;

export const IntroWrapper = styled.div`
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  min-height: 800px;
  width: 100%;

  @media (max-width: 960px) {
  position: relative;

    flex-direction: column;
  }
`;

export const Percentage = styled.div`
  font-size: 140px;
  font-weight: 600;
`;

export const Text = styled.p`
  line-height: 2em;
`;

export const Details = styled.div`
  flex: 1;
  z-index: 1;
  padding-left: 4rem;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
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
