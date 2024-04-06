import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useAuth } from "./context/AuthContext";

function App() {
  console.log(useAuth().isLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
