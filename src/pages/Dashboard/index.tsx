import React, { useContext } from "react";
import { DashMain } from "./style";
import { Text } from "../../styles/text";
import Button from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";
import ModalAddTech from "../../components/ModalAddTech";
import TechItem from "../../components/TechItem";


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
                <div>
                    <Text kind="logo">Kenzie Hub</Text>
                    <Button onClick={logoutFunction} variant="button3" >Sair</Button>
                </div>
                <div className="name">
                    <Text kind="tittle1">Olá, {user?.name}</Text>
                    <Text kind="secondaryText1">{user?.course_module}</Text>
                </div>
                <div className="techDiv">
                    <div>
                        <Text kind="tittle1">Tecnologias</Text>
                        <Button onClick={() => {showModal()}} variant="button3">+</Button>
                    </div>
                    <ul>
                        {user?.techs.map((tech) => (
                            <TechItem key={tech.id} status={tech.status} title={tech.title} id={tech.id}></TechItem>
                        ))}
                    </ul>
                </div>
            </DashMain>
            {
                isModalOn ? <ModalAddTech setIsModalOn={setIsModalOn}/> : null
            }
        </>
    )
}

export default DashboardPage