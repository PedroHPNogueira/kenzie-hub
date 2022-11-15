import React, { useContext } from "react";

import {RegisterMain} from "./style"
import { Input } from "../../styles/input"
import { Text } from "../../styles/text";
import { Select } from "../../styles/select";
import Button from "../../components/Button/index";
import { registerUserSchema } from "../../validations/registerUser";

import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import {motion} from "framer-motion"

interface IRegisterData{
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    bio: string,
    contact: string,
    course_module: string
}

function RegisterPage(){
    const { registerFunction } = useContext(UserContext)

    const {register, handleSubmit, formState: {errors}} = useForm<IRegisterData>({
        resolver: yupResolver(registerUserSchema)
    })

    function onSubmitFunction(data: IRegisterData){
        registerFunction(data)
    }

    return (
        <RegisterMain>
            <div className="logoDiv">
                <motion.p animate={{y: [20,0], opacity: [0, 1]}} transition={{ duration: 0.5 ,times: [0,1], delay:0}}>
                    <Text kind="logo">Tech Hub</Text>
                </motion.p>
                <motion.p animate={{y: [20,0], opacity: [0, 1]}} transition={{ duration: 0.5 ,times: [0,1], delay:0.2}}>
                    <Link to={"/login"}>Voltar</Link>
                </motion.p>             
            </div>
            <motion.div className="formDiv" animate={{y: [20,0], opacity: [0, 1]}} transition={{ duration: 0.5 ,times: [0,1], delay:0.4}}>
                <Text kind="tittle1">Registrar</Text>
                <Text kind="secondaryText1">Rápido e grátis, vamos nessa</Text>
                <form onSubmit={handleSubmit(onSubmitFunction)}>

                    <label htmlFor="name">Nome</label>
                    <Input id="name" placeholder="Digite seu nome aqui" {...register("name")}></Input>
                    <p>{errors.name?.message}</p>

                    <label htmlFor="email">Email</label>
                    <Input id="email" placeholder="Digite seu email aqui" {...register("email")}></Input>
                    <p>{errors.email?.message}</p>

                    <label htmlFor="password">Senha</label>
                    <Input type="password" id="password" placeholder="Digite sua senha aqui" {...register("password")}></Input>
                    <p>{errors.password?.message}</p>

                    <label htmlFor="confirmPassword">Confirmar senha</label>
                    <Input type="password" id="confirmPassword" placeholder="Digite novamente sua senha" {...register("confirmPassword")}></Input>
                    <p>{errors.confirmPassword?.message}</p>

                    <label htmlFor="bio">Bio</label>
                    <Input id="bio" placeholder="Fale um pouco sobre você..." {...register("bio")}></Input>
                    <p>{errors.bio?.message}</p>

                    <label htmlFor="contact">Contato</label>
                    <Input id="contact" placeholder="Opção de contato" {...register("contact")}></Input>
                    <p>{errors.contact?.message}</p>

                    <label htmlFor="course_module">Selecionar módulo</label>
                    <Select id="course_module" {...register("course_module")}>
                        <option value="">--Selecione seu módulo--</option>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                    </Select>
                    <p>{errors.course_module?.message}</p>
                    <Button type="submit" variant="button1">Cadastrar</Button>
                </form>
            </motion.div>
        </RegisterMain>
    )
}

export default RegisterPage