import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  backgroundColor: string;
  minWidth?: string;
}

export function Button({
  children,
  backgroundColor,
  minWidth,
  ...rest
}: ButtonProps) {
  return (
    <Container backgroundColor={backgroundColor} minWidth={minWidth} {...rest}>
      {children}
    </Container>
  );
}
