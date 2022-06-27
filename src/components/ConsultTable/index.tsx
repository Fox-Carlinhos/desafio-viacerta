import { useContext } from "react";
import { Container } from "./styles";
import { ConsultsContext } from "../../ConsultsContext";
import { HiOutlineTrash } from "react-icons/hi";
import { TiEdit } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";

export function ConsultTable() {
  const { consults, deleteConsult } = useContext(ConsultsContext);

  async function handleDeleteConsult(id: number | string) {
    deleteConsult(id);
  }

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
          {consults.map((consult) => (
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
