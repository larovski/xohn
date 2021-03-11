import styled from "styled-components";
import detailsIllustration from "assets/illustrations/details.svg";

export const Wrapper = styled.div`
  /* background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat; */
`;

export const BenefitsWrapper = styled.div`
  padding: 0 0 4rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 0 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: 2rem;
  padding-right: 5rem;

  @media (max-width: 960px) {
    padding-left: unset;
    padding-right: unset;
    max-width: 300px;
    margin: auto;
  }

  h1 {
    font-size: 50pt;
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};
    margin-bottom: 0;
    min-width: 50px;
    line-height: 1.5;
  }

  p {
    font-size: 10px;
    margin-bottom: 0;
    font-weight: normal;
    line-height: 1.5;
    color: ${({ theme }) => (theme === "dark" ? "#c7c7c7" : "#707070")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }
  }

  div {
    display: flex;
    flex-direction: column;

    h6 {
      margin-bottom: 0;
      line-height: 1.5;
    }
  }
`;

export const TileBox = styled.div`
  display: flex;
  flex-direction: column;
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
