import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import { UserProvider } from "./Components/UserContext.jsx";
createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
