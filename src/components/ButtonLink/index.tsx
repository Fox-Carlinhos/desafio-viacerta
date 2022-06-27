import { Container } from "./styles";

export interface ButtonLinkProps {
  children: string;
  backgroundColor: string;
  minWidth?: string;
  to: string;
}

export function ButtonLink({
  children,
  backgroundColor,
  minWidth,
  to,
}: ButtonLinkProps) {
  return (
    <Container to={to} backgroundColor={backgroundColor} minWidth={minWidth}>
      {children}
    </Container>
  );
}
