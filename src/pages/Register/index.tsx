import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
import { CivilStateSelect } from "../../components/CivilStateSelect";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { ConsultRegister, ConsultsContext } from "../../ConsultsContext";
import { api } from "../../services/api";
import { RegisterFormSchema } from "./RegisterValidation";
import {
  Background,
  Container,
  FormFormik,
  LastRow,
  Row,
  SectionTitle,
  Title,
  Wrapper,
} from "./styles";

export function Register() {
  const { createConsult, editConsult } = useContext(ConsultsContext);
  const [consult, setConsult] = useState<ConsultRegister>();

  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    if (params && params.id) {
      api
        .get(`consults/${params.id}`)
        .then((response) => setConsult(response.data));
    } else {
      setConsult({
        name: "",
        cpf: "",
        email: "",
        civilState: "",
        spouseName: "",
      });
    }
  }, [params]);

  async function handleRegisterConsult(values: ConsultRegister) {
    createConsult(values);
  }
  async function handleEditConsult(values: ConsultRegister) {
    if (params && params.id) editConsult(params.id, values);
  }

  return (
    <Background>
      <Wrapper>
        <Logo />
        <Title>Cadastro de Leads</Title>
        <Container>
          <SectionTitle>Filtros</SectionTitle>
          {consult && (
            <Formik
              validationSchema={RegisterFormSchema}
              initialValues={{
                name: consult.name,
                cpf: consult.cpf,
                email: consult.email,
                civilState: consult.civilState,
                spouseName: consult.spouseName,
              }}
              onSubmit={
                location.pathname.includes("edit")
                  ? handleEditConsult
                  : handleRegisterConsult
              }
            >
              {({
                values,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <FormFormik onSubmit={handleSubmit}>
                  <Row>
                    <Input
                      label="Nome"
                      width={55}
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <Input
                      label="CPF"
                      width={45}
                      name="cpf"
                      hasmask
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cpf}
                    />
                  </Row>
                  <Row>
                    <Input
                      label="Email"
                      width={55}
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <CivilStateSelect
                      label="Estado Civil"
                      width={45}
                      name="civilState"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.civilState}
                    />
                  </Row>
                  <Row>
                    <Input
                      label="Nome do Cônjugue"
                      width={53}
                      name="spouseName"
                      disabled={values.civilState !== "married"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.spouseName}
                    />
                  </Row>
                  <LastRow>
                    <ButtonLink to="/" backgroundColor="var(--cancel-button)">
                      Cancelar
                    </ButtonLink>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      backgroundColor="var(--success-button)"
                    >
                      Cadastrar
                    </Button>
                  </LastRow>
                </FormFormik>
              )}
            </Formik>
          )}
        </Container>
      </Wrapper>
    </Background>
  );
}
