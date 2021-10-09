import styled from "styled-components";

export const ContainerHighlight = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 2rem;
  margin-top: -7rem;
  overflow-x: scroll;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    @media (max-width: 425px) {
      padding: 1.5rem 2rem;
    }

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      @media (max-width: 425px) {
        margin-bottom: 1rem;
      }
    }

    span {
      display: block;
      font-size: 1.5rem;
      line-height: 3rem;
    }

    strong {
      display: block;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--blue-dark);
      color: #fff;
    }
  }
`;
