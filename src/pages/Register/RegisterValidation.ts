import * as yup from "yup";

export const RegisterFormSchema = yup.object().shape({
  name: yup.string().required("Campo Obrigatório"),
  cpf: yup.string().required("Campo Obrigatório"),
  email: yup.string().required("Campo Obrigatório").email("Email inválido"),
  civilState: yup.string().required("Campo Obrigatório"),
  spouseName: yup.string(),
});
