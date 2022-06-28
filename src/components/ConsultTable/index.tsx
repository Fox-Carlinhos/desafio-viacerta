import { useEffect, useState } from "react";
import { Container } from "./styles";
import { HiOutlineTrash } from "react-icons/hi";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import { api, deleteConsult } from "../../services/api";
import { Consult } from "../../models/ConsultDTO";

export function ConsultTable() {
  const [consults, setConsults] = useState<Consult[]>([]);

  async function handleDeleteConsult(id: number | string) {
    deleteConsult(id);
    setConsults((oldState) => oldState.filter((consult) => consult.id !== id));
  }

  useEffect(() => {
    api.get("consults").then((response) => setConsults(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Nome</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {consults &&
            consults?.map((consult) => (
              <tr key={consult.id}>
                <td>
                  <Link to={`/edit/${consult.id}`}>
                    <TiEdit size={15} />
                  </Link>
                  <button>
                    <HiOutlineTrash
                      onClick={() => handleDeleteConsult(consult.id)}
                      size={15}
                    />
                  </button>
                </td>
                <td>{consult.email}</td>
                <td>{consult.name}</td>
                <td>{consult.cpf}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
