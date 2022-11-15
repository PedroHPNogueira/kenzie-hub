import React from "react";
import { TechItemLi } from "./style";
import { Text } from "../../styles/text";
import {BsTrash} from "react-icons/bs"
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import {motion} from "framer-motion"

interface ITechItemProps{
    title: string,
    status: string,
    id: string
}

function TechItem({title, status, id}: ITechItemProps){

    const {removeTech} = useContext(TechContext)

    return (
        <motion.div style={{width: "100%"}} animate={{x: [-100, 0], opacity: [0,1]}} transition={{ duration: 0.5, times: [0,1]}} exit={{x: -1000}}>
            <TechItemLi>
                <Text kind="tittle1">{title}</Text>
                <div>
                    <Text kind="secondaryText1">{status}</Text>
                    <i onClick={() => {removeTech(id)}}><BsTrash/></i>
                </div>
            </TechItemLi>
        </motion.div>   
    )
}

export default TechItem