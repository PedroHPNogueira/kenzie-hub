import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';


interface IUserContextProps{
    children: React.ReactNode
}

interface IUserContext{
    loginFunction: (data: ILoginData) => void,
    user: IUser | null,
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>
    registerFunction: (data: IRegisterData) => void,
    loading: boolean,
    logoutFunction: () => void,
    token: string | undefined,
    updateUser: () => void
}

interface IRegisterData{
    name: string,
    email: string,
    password: string,
    bio: string,
    contact: string,
}

interface ILoginData{
    email: string,
    password: string,
}

interface IUser{
    id: string,
    name: string,
    email:string,
    course_module: string,
    bio: string,
    contact: string,
    techs: Itech[]
}

interface Itech{
    id: string,
    title: string,
    status: string,
    created_at: string,
    updated_at: string
}


export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserContextProps) => {

    const navigate = useNavigate()

    const [user, setUser] = useState<IUser | null>(null)
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<undefined | string>(undefined)

    async function registerFunction(data: IRegisterData){
        
        try {
            await api.post("/users",data)

            navigate("/login")
        } catch (error){
            console.log(error)
        }
    }

    async function loginFunction(data: ILoginData){

        try {
            const response = await api.post("/sessions", data)

            localStorage.setItem("@kenziehub:TOKEN",response.data.token)
            localStorage.setItem("@kenziehub:USERID",response.data.user.id)
            setUser(response.data.user)
            setToken(response.data.token)
            navigate("/dashboard")
        } catch (error) {
            console.error(error);
        }
    }

    function logoutFunction(){

        localStorage.removeItem("@kenziehub:TOKEN")
        localStorage.removeItem("@kenziehub:USERID")

        navigate("/login")
    }

    async function updateUser(){

        try {
            const profile = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(profile.data)
            setToken(token)
        } catch {
            
        }
    }

    useEffect(() => {

        async function loginUser(){
            const token = localStorage.getItem("@kenziehub:TOKEN")

            if(token){
                try {
                    const profile = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(profile.data)
                    setToken(token)
                } catch {
                    localStorage.removeItem("@kenziehub:TOKEN")
                }
            }

            setLoading(false)
        }
        loginUser()
    },[])

    return (
        <UserContext.Provider value={{ loginFunction, user, setUser, registerFunction, loading, logoutFunction, token, updateUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider 