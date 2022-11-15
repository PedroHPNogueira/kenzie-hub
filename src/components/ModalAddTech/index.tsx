import React from "react";
import { Modal } from "./style";
import { Text } from "../../styles/text";
import Button from "../Button";
import { Input } from "../../styles/input";
import { Select } from "../../styles/select";

import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { addTechSchema } from "../../validations/addTech";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import {motion} from "framer-motion"

interface IModalAddTech{
    setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>
}

interface IAddTechData{
    title: string,
    status: string,
}

interface IForm{
    title: string,
    status: string
}

function ModalAddTech({setIsModalOn}: IModalAddTech){

    const { addTech } = useContext(TechContext)

    const {register, handleSubmit, formState: {errors}} = useForm<IForm>({
        resolver: yupResolver(addTechSchema)
    })

    function onSubmitFunction(data: IAddTechData){
        addTech(data)
        setIsModalOn(false)
    }
 
    return (
        <Modal>
            <motion.div animate={{y: [50,0], opacity: [0, 1]}} transition={{duration: 0.25,times: [0,1]}}>
                <div>
                    <Text kind="tittle1">Cadastrar Tecnologia</Text>
                    <Button onClick={() => {setIsModalOn(false)}} variant={"button4"}>X</Button>
                </div>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <label htmlFor="title">Nome</label>
                    <Input id="title" placeholder="Nome da tecnologia" {...register("title")}></Input>
                    <p>{errors.title?.message}</p>

                    <label htmlFor="status">Selecionar status</label>
                    <Select id="status" {...register("status")}>
                        <option value="">--status--</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>
                    <p>{errors.status?.message}</p>

                    <Button variant={"button1"}>Cadastrar tecnologia</Button>
                </form>
            </motion.div>
        </Modal>
    )
}

export default ModalAddTech