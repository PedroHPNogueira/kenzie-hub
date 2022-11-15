import { Routes, Route, Navigate } from "react-router";
import ProtectedRoutes from "../components/ProtectedRoutes";
import DashboardPage from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/ResgisterPage";

function RoutesMain(){

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/login"/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>

            <Route element={<ProtectedRoutes/>}>
                <Route path="/dashboard" element={<DashboardPage/>}></Route>
            </Route>
        </Routes>
    )
}

export default RoutesMain