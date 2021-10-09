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

  @media (max-width: 425px) {
    padding: 2rem 1rem 6rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 2rem;

    @media (max-width: 425px) {
      font-size: 2.5rem;
      margin-top: 1.5rem;
    }
  }
`;
