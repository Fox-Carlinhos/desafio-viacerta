import { InputHTMLAttributes } from "react";
import { Container, InputField, Label, MaskedInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  width: number;
  hasmask?: boolean;
}

export function Input({ label, width, hasmask, ...rest }: InputProps) {
  return (
    <Container width={width}>
      <Label>{label}</Label>
      {hasmask ? (
        <MaskedInput mask="999.999.999-99" {...rest} />
      ) : (
        <InputField {...rest} />
      )}
    </Container>
  );
}
