import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .inline {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    &.title {
      justify-content: space-between;
    }
  }

  .suc-title {
    margin-right: 1rem;
    font-weight: 500;
  }

  .success {
    color: var(--green);
  }

  .fail {
    color: var(--red);
  }

  .details {
    margin-top: 1rem;

    .title {
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }
`;
