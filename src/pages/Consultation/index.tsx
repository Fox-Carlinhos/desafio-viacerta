import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
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
            <Button minWidth="84px" backgroundColor="var(--success-button)">
              Filtrar
            </Button>
          </LastRow>
        </Container>
        <ButtonLink
          minWidth="84px"
          backgroundColor="var(--success-button)"
          to="/register"
        >
          Novo Lead
        </ButtonLink>
        <ConsultTable />
      </Wrapper>
    </Background>
  );
}
