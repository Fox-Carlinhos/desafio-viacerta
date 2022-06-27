import styled from "styled-components";
import InputMask from "react-input-mask";

interface InputStylesProps {
  width: number;
}

export const Container = styled.div<InputStylesProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  width: ${({ width }) => width}%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 1.1rem;
  color: var(--labels);
`;

export const InputField = styled.input`
  font-size: 1rem;
  color: var(--labels);

  width: 100%;
  height: 35px;

  padding: 0 10px;

  border: 1px solid #989898;
  border-radius: 6px;

  transition: color 0.2s ease;

  :focus {
    border-color: #444;
  }

  :disabled {
    background: var(--blocked-field);
    cursor: not-allowed;
  }
`;

export const MaskedInput = styled(InputMask)`
  font-size: 1rem;
  color: var(--labels);

  width: 100%;
  height: 35px;

  padding: 0 10px;

  border: 1px solid #989898;
  border-radius: 6px;

  transition: color 0.2s ease;

  :focus {
    border-color: #444;
  }
`;
