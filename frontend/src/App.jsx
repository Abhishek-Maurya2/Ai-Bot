import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";
import Auth0CallbackHandler from "./Auth/Auth0CallbackHandler";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <Route path="/callback" component={Auth0CallbackHandler} />
      {isAuthenticated ? <Dashboard /> : <LandingPage />}
    </Router>
  );
}

export default App;
