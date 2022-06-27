import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

export interface Consult {
  id: string | number;
  email: string;
  name: string;
  cpf: string;
  civilState: string;
  spouseName: string;
}

export type ConsultRegister = Omit<Consult, "id">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface ConsultsContextData {
  consults: Consult[];
  createConsult: (consult: ConsultRegister) => void;
  deleteConsult: (consultId: string | number) => void;
  editConsult: (consultId: string | number, consult: ConsultRegister) => void;
}

export const ConsultsContext = createContext<ConsultsContextData>(
  {} as ConsultsContextData
);

export function ConsultsProvider({ children }: TransactionsProviderProps) {
  const [consults, setConsults] = useState<Consult[]>([]);

  useEffect(() => {
    api.get("consults").then((response) => setConsults(response.data));
  }, []);

  async function createConsult(consultRegister: ConsultRegister) {
    const response = await api.post("/consults", consultRegister);
    const { consult } = response.data;

    setConsults([...consults, consult]);
  }

  async function deleteConsult(consultId: string | number) {
    await api.delete(`/consults/${consultId}`).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
  }

  async function editConsult(
    consultId: string | number,
    consult: ConsultRegister
  ) {
    api.put(`/consults/${consultId}`, consult).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
  }

  return (
    <ConsultsContext.Provider
      value={{
        consults,
        createConsult,
        deleteConsult,
        editConsult,
      }}
    >
      {children}
    </ConsultsContext.Provider>
  );
}
