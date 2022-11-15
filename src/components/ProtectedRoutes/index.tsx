import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";


function ProtectedRoutes(){
    const { user , loading } = useContext(UserContext)

    if (loading){
        return (
            null
        )
    }

    if (user){
        return (
            <Outlet/>
        )
    } else {
        return (
            <Navigate to={"/login"}/>
        )
    }
}

export default ProtectedRoutes