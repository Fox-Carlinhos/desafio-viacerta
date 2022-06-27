import { Formik } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { CivilStateSelect } from "../../components/CivilStateSelect";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { ConsultsContext } from "../../ConsultsContext";
import { api } from "../../services/api";
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

const RegisterFormSchema = yup.object().shape({
  name: yup.string().required("Campo Obrigatório"),
  cpf: yup.string().required("Campo Obrigatório"),
  email: yup.string().required("Campo Obrigatório").email("Email inválido"),
  civilState: yup.string().required("Campo Obrigatório"),
  spouseName: yup.string(),
});

export function Register() {
  const { createConsult } = useContext(ConsultsContext);

  return (
    <Background>
      <Wrapper>
        <Logo />
        <Title>Cadastro de Leads</Title>
        <Container>
          <SectionTitle>Filtros</SectionTitle>
          <Formik
            validationSchema={RegisterFormSchema}
            initialValues={{
              name: "",
              cpf: "",
              email: "",
              civilState: "",
              spouseName: "",
            }}
            onSubmit={async (values, { setSubmitting }) => {
              await new Promise((r) => setTimeout(r, 500));
              setSubmitting(false);

              createConsult(values);
            }}
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
                  <Button type="button" backgroundColor="var(--cancel-button)">
                    Cancelar
                  </Button>
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
        </Container>
      </Wrapper>
    </Background>
  );
}
