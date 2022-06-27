import { Button } from "../../components/Button";
import { ConsultTable } from "../../components/ConsultTable";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import {
  Background,
  Container,
  LastRow,
  Row,
  SectionTitle,
  Title,
  Wrapper,
} from "./styles";

export function Consultation() {
  return (
    <Background>
      <Wrapper>
        <Logo />
        <Title>Consulta de Leads</Title>
        <Container>
          <SectionTitle>Filtros</SectionTitle>
          <Row>
            <Input label="Nome" width={55} name="name" />
            <Input label="CPF" width={45} name="cpf" hasmask />
          </Row>
          <LastRow>
            <Button minWidth="80px" backgroundColor="var(--success-button)">
              Filtrar
            </Button>
          </LastRow>
        </Container>
        <Button backgroundColor="var(--success-button)">Novo Lead</Button>
        <ConsultTable />
      </Wrapper>
    </Background>
  );
}
