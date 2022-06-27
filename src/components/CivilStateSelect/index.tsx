import { SelectHTMLAttributes } from "react";
import { Container, Label, Select } from "./styles";

interface CivilStateSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  width: number;
}

export function CivilStateSelect({
  label,
  width,
  ...rest
}: CivilStateSelectProps) {
  return (
    <Container width={width}>
      <Label>{label}</Label>
      <Select name="civilState" {...rest}>
        <option value=""></option>
        <option value="single">Solteiro(a)</option>
        <option value="married">Casado(a)</option>
        <option value="widower">Víuvo(a)</option>
        <option value="separeted">Separado(a)</option>
      </Select>
    </Container>
  );
}
