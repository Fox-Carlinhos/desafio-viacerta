import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  table {
    width: 100%;
    border-spacing: 0 0.1rem;

    th {
      color: var(--white);
      padding: 1rem 2rem;
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody {
      background: var(--white);
    }

    td {
      padding: 1rem 1rem;
      border: 0;
      color: var(--labels);
    }
  }
`;
