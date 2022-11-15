import React from "react";

import Global from "./styles/global";
import Routes from "./routes";

import UserProvider from "./contexts/UserContext";
import TechProvider from "./contexts/TechContext";


function App() {
  return (
    <>
    <Global/>

    <UserProvider>
      <TechProvider>
        <Routes/>
      </TechProvider>
    </UserProvider>  
    </>
  );
}

export default App;
