import styled from "styled-components";
import { darken } from "polished";

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    background: var(--blue);

    font-size: 1rem;
    color: #fff;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    width: 18rem;
    margin-top: 4rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &.isPressed {
      background: ${darken(0.05, "#1D5E72")};
    }
  }
`;
