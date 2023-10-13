import React from "react";
import {Route, Routes} from 'react-router-dom'
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signup />}/>
      <Route path='/SignIn' element={<SignIn />}/>
      <Route path='/Dashboard' element={<Dashboard />}/>
    </Routes>
  );
}

export default App;
