import React, { ReactNode, useContext } from "react";
import { createContext } from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";

interface ItechContextProps{
    children: ReactNode
}

interface ITechContext{
    addTech: (data: IAddTechData) => void,
    removeTech: (id: string) => void
}

interface IAddTechData{
    title: string,
    status: string
}

export const TechContext = createContext<ITechContext>({} as ITechContext)

const TechProvider = ({children}: ItechContextProps) => {

    const {token, updateUser} = useContext(UserContext)

    async function addTech(data: IAddTechData){

        try {
            await api.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            updateUser()
        } catch (error){
            console.log(error)
        }
    }

    async function removeTech(id: string){

        try {
            await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            updateUser()
        } catch (error){
            console.log(error)
        }
    }


    return (
        <TechContext.Provider value={{addTech, removeTech}}>
            {children}
        </TechContext.Provider>
    )
}
export default TechProvider