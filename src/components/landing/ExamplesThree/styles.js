import styled from "styled-components";

export const Wrapper = styled.div`
  margin: -2rem auto 2rem;
  height: 800px;
  position: relative;

  @media (max-width: 480px) {
    padding: 0 0 2rem;
  }
`;

export const InnerWrapper = styled.div`
  position: absolute;
  right: 200px;
  top: 150px;
  left: 200px;
  bottom: 350px;
  max-width: 700px;
  margin: 0 auto;
  background-color: #fbf9f4;
  border-radius: 5px;
  text-align: right;
`;

export const Text = styled.p`
  margin-top: -30px;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#EFEBE7")};
  }

  p {
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#c7c7c7")};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === "light" ? "#000" : "#EFEBE7")};
    }

    span {
      color: ${({ theme }) => (theme === "light" ? "#000" : "#EFEBE7")};
      margin-left: 0.5rem;
    }
  }
`;

export const Languages = styled.div`
  opacity: 0.5;
  font-size: 14px;
`;
