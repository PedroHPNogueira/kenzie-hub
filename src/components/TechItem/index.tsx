import React from "react";
import { TechItemLi } from "./style";
import { Text } from "../../styles/text";
import {BsTrash} from "react-icons/bs"
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

interface ITechItemProps{
    title: string,
    status: string,
    id: string
}

function TechItem({title, status, id}: ITechItemProps){

    const {removeTech} = useContext(TechContext)

    return (   
        <TechItemLi>
            <Text kind="tittle1">{title}</Text>
            <div>
                <Text kind="secondaryText1">{status}</Text>
                <i onClick={() => {removeTech(id)}}><BsTrash/></i>
            </div>
        </TechItemLi>
    )
}

export default TechItem