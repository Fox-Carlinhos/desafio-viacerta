import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonStylesProps {
  backgroundColor: string;
  minWidth?: string;
}

export const Container = styled.button<ButtonStylesProps>`
  padding: 10px;
  border-radius: 4px;

  font-weight: 700;

  min-width: ${({ minWidth }) => minWidth};
  background-color: ${({ backgroundColor }) => backgroundColor};

  transition: color 0.2 ease;

  :hover {
    opacity: 0.8;
  }
`;

export const ContainerLink = styled(Link)<ButtonStylesProps>`
  padding: 10px;
  border-radius: 4px;

  font-weight: 700;

  min-width: ${({ minWidth }) => minWidth};
  background-color: ${({ backgroundColor }) => backgroundColor};

  transition: color 0.2 ease;

  :hover {
    opacity: 0.8;
  }
`;
