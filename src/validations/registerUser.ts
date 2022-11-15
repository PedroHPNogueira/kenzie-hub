import * as yup from "yup"

export const registerUserSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome"),
    email: yup.string().required("Digite seu email").email("Insira um email válido"),
    password: yup.string().required("Insira sua senha").min(8, "Sua senha deve conter no mínimo 8 dígitos"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Sua confirmação deve ser idêntica a senha"),
    bio: yup.string().required("Insira sua bio"),
    contact: yup.string().required("insira seu contato"),
    course_module: yup.string().required("Escolha seu módulo")
}) 