import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  margin: auto;
  max-width: 1280px;

  @media (max-width: 1960px) {
    padding: 2rem 0 1.5rem;
  }

  @media (max-width: 680px) {
    padding: 2rem 0 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid #727272;
  padding: 1.5rem 1rem 0;

  
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  h2,
  a,
  span {
    color: #727272;
  }
  h2 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.75rem;
    margin-bottom: 0;
    line-height: 2;
  }

  text-align: ${props => (props.left ? "left" : "right")};

  @media (max-width: 680px) {
    margin-bottom: 2rem;

    h2 {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.75rem;
      margin-bottom: 0;
      line-height: 1.4;
    }
  }
`;
