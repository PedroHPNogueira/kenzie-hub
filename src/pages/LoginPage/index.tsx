import React, { useContext } from "react";

import {LoginMain} from "./style"
import { Input } from "../../styles/input"
import { Text } from "../../styles/text";
import Button from "../../components/Button/index";
import { loginSchema } from "../../validations/loginUser";

import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

interface ILoginData{
    email: string,
    password: string
}

interface IForm{
    email: string,
    password: string
}

function LoginPage(){
    const {register, handleSubmit, formState: {errors}} = useForm<IForm>({
        resolver: yupResolver(loginSchema)
    })

    const { loginFunction } = useContext(UserContext)

    function onSubmitFunction(data: ILoginData){
        loginFunction(data)
    }

    return (
        <LoginMain>
            <motion.p animate={{y: [20,0], opacity: [0, 1]}} transition={{times: [0,0.5]}}>
                <Text kind="logo">Tech Hub</Text>
            </motion.p>
            <motion.div animate={{y: [30,0], opacity: [0, 1]}} transition={{times: [0.25,0.75]}}>
                <Text kind="tittle1">Login</Text>

                <form onSubmit={handleSubmit(onSubmitFunction)}>

                    <label htmlFor="email">email</label>
                    <Input id="email" placeholder="Digite seu email aqui" {...register("email")}></Input>
                    <p>{errors.email?.message}</p>

                    <label htmlFor="password">senha</label>
                    <Input type="password" id="password" placeholder="Digite sua senha aqui" {...register("password")}></Input>
                    <p>{errors.password?.message}</p>
                    
                    <Button type="submit" variant="button1">Entrar</Button>
                </form>

                <Text kind="secondaryText1">Ainda não possui uma conta?</Text>
                <Link to={"/register"}>Cadastrar</Link>
            </motion.div>
        </LoginMain>
    )
}

export default LoginPage