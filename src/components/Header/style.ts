import styled from "styled-components";

export const ContainerHeader = styled.header`
  background: var(--blue);
`;

export const Content = styled.header`
  background: var(--blue);
  margin: 0 auto;

  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 2rem;
  }
`;
