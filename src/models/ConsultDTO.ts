import { ReactNode } from "react";

export interface Consult {
  id: string | number;
  email: string;
  name: string;
  cpf: string;
  civilState: string;
  spouseName: string;
}

export type ConsultRegister = Omit<Consult, "id">;
