import * as yup from "yup"

export const addTechSchema = yup.object().shape({
    title: yup.string().required("Insira um nome"),
    status: yup.string().required("insira seu status"),
})