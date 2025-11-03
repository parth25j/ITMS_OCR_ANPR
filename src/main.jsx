import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ITMSDTAPROVIDER } from "./context/ItmsDataContext.jsx";
import DetectionProvider from "./context/detetctionContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DetectionProvider>
          <App />
        </DetectionProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
