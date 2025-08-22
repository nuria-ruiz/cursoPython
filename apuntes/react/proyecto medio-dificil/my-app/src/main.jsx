import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import CorporateApp from "./CorporateApp.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CorporateApp />
  </React.StrictMode>
);
