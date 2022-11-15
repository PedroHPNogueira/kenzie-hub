import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().required("Insira um email!").email("insira um email válido!"),
    password: yup.string().required("insira sua senha!"),
})