import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ChatProvider } from "./handler/ChatProvider";

import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "https://ai-bot-backend-gamma.vercel.app/api/v1";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ChatProvider>
        <BrowserRouter>
          <Toaster />
          <App />
        </BrowserRouter>
      </ChatProvider>
    </AuthProvider>
  </React.StrictMode>
);
