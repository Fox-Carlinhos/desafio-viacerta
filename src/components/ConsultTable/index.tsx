import { useContext } from "react";
import { Container } from "./styles";
import { ConsultsContext } from "../../ConsultsContext";
import { HiOutlineTrash } from "react-icons/hi";
import { TiEdit } from "react-icons/ti";

export function ConsultTable() {
  const { consults, handleDeleteConsult } = useContext(ConsultsContext);
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
                <button>
                  <TiEdit size={15} />
                </button>
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
