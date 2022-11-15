import React from "react";

import Global from "./styles/global";
import Routes from "./routes";

import UserProvider from "./contexts/UserContext";
import TechProvider from "./contexts/TechContext";
import { StyledToast } from "./components/Toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <Global/>
    <StyledToast />

    <UserProvider>
      <TechProvider>
        <Routes/>
      </TechProvider>
    </UserProvider>  
    </>
  );
}

export default App;
