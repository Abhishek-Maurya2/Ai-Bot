import React from "react";
import Dashboard from "./Pages/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from "./Pages/LandingPage";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  // return isLoading ? (
  //   <p>Loading</p>
  // ) : isAuthenticated ? (
  //   <Dashboard />
  // ) : (
  //   <Landing />
  // );
  return isLoading ? (<p>Loading...</p>) : isAuthenticated ? (<Dashboard />) : (<LandingPage />);
}

export default App;
