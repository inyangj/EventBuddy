import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import { ModalProvider } from "./contexts/ModalContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ModalProvider>
    </UserProvider>
  );
}

export default App;
