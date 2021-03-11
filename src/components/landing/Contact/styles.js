import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4rem 0 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 20pt;
    text-transform: uppercase;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 10pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
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
