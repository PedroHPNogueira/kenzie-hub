import React, { useContext } from "react";
import { DashMain } from "./style";
import { Text } from "../../styles/text";
import Button from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";
import ModalAddTech from "../../components/ModalAddTech";
import TechItem from "../../components/TechItem";
import {motion} from "framer-motion"


function DashboardPage(){
    const { logoutFunction, user } = useContext(UserContext)

    const [isModalOn, setIsModalOn] = useState(false)

    function showModal(){
        if(isModalOn){
            setIsModalOn(false)
        } else {
            setIsModalOn(true)
        }
    }


    return (
        <>
            <DashMain>
                <div className="header">
                    <motion.div animate={{x: [-20,0], opacity: [0, 1]}} transition={{duration: 0.5,times: [0,1], delay: 0.0}}>
                        <Text kind="logo">Tech Hub</Text>
                    </motion.div>
                    <motion.div animate={{x: [-20,0], opacity: [0, 1]}} transition={{duration: 0.5,times: [0,1], delay: 0.2}}>
                        <Button onClick={logoutFunction} variant="button3" >Sair</Button>
                    </motion.div>
                </div>
                <div className="name">
                    <motion.div animate={{x: [-20,0], opacity: [0, 1]}} transition={{duration: 0.5,times: [0,1], delay: 0.4}}>
                        <Text kind="tittle1">Olá, {user?.name}</Text>
                    </motion.div>
                    <motion.div animate={{x: [-20,0], opacity: [0, 1]}} transition={{duration: 0.5,times: [0,1], delay: 0.6}}>
                        <Text className="module" kind="secondaryText1">{user?.course_module}</Text>
                    </motion.div>
                </div>
                <div className="techDiv">
                    <div>
                        <motion.div animate={{x: [-20,0], opacity: [0, 1]}} transition={{duration: 0.5,times: [0,1], delay: 0.8}}>
                            <Text kind="tittle1">Tecnologias</Text>
                        </motion.div>
                        <motion.div animate={{x: [-20,0], opacity: [0, 1]}} transition={{duration: 0.5,times: [0,1], delay: 1.0}}>
                            <Button onClick={() => {showModal()}} variant="button3">+</Button>
                        </motion.div>      
                    </div>
                    <motion.ul animate={{y: [20,0], opacity: [0, 1]}} transition={{duration: 0.5,times: [0,1], delay: 1.5}}>
                        {user?.techs.map((tech) => (
                            <TechItem key={tech.id} status={tech.status} title={tech.title} id={tech.id}></TechItem>
                        ))}
                    </motion.ul>
                </div>
            </DashMain>
            {
                isModalOn ? <ModalAddTech setIsModalOn={setIsModalOn}/> : null
            }
        </>
    )
}

export default DashboardPage