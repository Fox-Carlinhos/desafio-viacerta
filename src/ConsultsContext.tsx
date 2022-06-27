import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface consult {
  id: number;
  email: string;
  name: string;
  cpf: string;
}

type consultRegister = Omit<consult, "id">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface ConsultsContextData {
  consults: consult[];
  createConsult: (consult: consultRegister) => void;
  handleDeleteConsult: (consultId: number) => void;
}

export const ConsultsContext = createContext<ConsultsContextData>(
  {} as ConsultsContextData
);

export function ConsultsProvider({ children }: TransactionsProviderProps) {
  const [consults, setConsults] = useState<consult[]>([]);

  useEffect(() => {
    api.get("consults").then((response) => setConsults(response.data.consults));
  }, [consults, setConsults]);

  async function createConsult(consultRegister: consultRegister) {
    const response = await api.post("/consults", consultRegister);
    const { consult } = response.data;

    setConsults([...consults, consult]);
  }

  async function handleDeleteConsult(consultId: number) {
    const response = await api.delete("/consults");
  }

  return (
    <ConsultsContext.Provider
      value={{ consults, createConsult, handleDeleteConsult }}
    >
      {children}
    </ConsultsContext.Provider>
  );
}
