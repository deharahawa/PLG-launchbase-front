import styled from "styled-components";

export const ContainerTable = styled.div`
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    tbody > tr {
      cursor: pointer;
    }

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;

      @media (max-width: 640px) {
        display: none;
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      @media (max-width: 425px) {
        padding: 1.5rem 1rem 1rem;
        display: block;
      }

      &:first-child {
        color: var(--text-title);
      }

      &.success {
        color: var(--green);
        @media (max-width: 640px) {
          display: none;
        }
      }

      &.fail {
        color: var(--red);
        @media (max-width: 640px) {
          display: none;
        }
      }

      &.details {
        @media (max-width: 640px) {
          display: none;
        }
      }

      &.name {
        @media (max-width: 425px) {
          font-size: 1.5rem;
        }
      }

      &.date {
        @media (max-width: 425px) {
          text-align: right;
        }
      }
    }
  }
`;
