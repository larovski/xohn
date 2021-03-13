import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin: 0;
  height: 100%;
`;

export const Brand = styled.a`
  position: relative;
  height: 20px;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#EFEBE7")};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) =>
      theme === "light" ? "unset" : "unset"};
  }
`;
