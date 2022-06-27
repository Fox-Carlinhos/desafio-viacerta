import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: var(--background);
`;

export const Wrapper = styled.div`
  width: 600px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  gap: 20px;

  @media (max-width: 768px) {
    width: 400px;
    align-items: center;
  }
  @media (max-width: 440px) {
    width: 340px;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 2rem;
  font-weight: 400;

  margin-bottom: 20px;
`;

export const Container = styled.section`
  width: 100%;
  padding: 20px 32px;
  border-radius: 16px;
  background: var(--white);

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: var(--labels);

  margin-bottom: 20px;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LastRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 20px;
`;
