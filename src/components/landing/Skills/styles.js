import styled from "styled-components";
import detailsIllustration from "assets/illustrations/details.svg";

export const Wrapper = styled.div`
  /* background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat; */
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  margin-top: -15rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 20pt;
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
    color: ${({ theme }) => (theme === "dark" ? "#EFEBE7" : "#212121")};

    @media (max-width: 680px) {
      width: 70%;
    }

    @media (max-width: 480px) {
      width: 100%;
      font-size: 15pt;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === "dark" ? "#EFEBE7" : "#212121")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.5;
    color: ${({ theme }) => (theme === "dark" ? "#c7c7c7" : "#707070")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const TileBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.index % 2 ? "row-reverse" : "row")};
  align-items: center;

  h6 {
    margin-bottom: 0;
    line-height: 1.5;
  }

  @media (max-width: 680px) {
    flex-direction: column-reverse;
    align-items: ${props => (props.index % 2 ? "flex-end" : "flex-start")};
    text-align: ${props => (props.index % 2 ? "left" : "right")};
  }

  img {
    float: left;
  }
`;

export const Tile = styled.div`
  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  p {
    font-size: 14px;
    margin-bottom: 0;
    font-weight: normal;
    line-height: 1.8;
    color: ${({ theme }) => (theme === "dark" ? "#c7c7c7" : "#707070")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }
  }
`;
