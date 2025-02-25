import React from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import App from "./components/App/App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <HeroUIProvider>
      <div className="w-screen h-screen p-8 flex items-start justify-center">
        <App />
      </div>
    </HeroUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);