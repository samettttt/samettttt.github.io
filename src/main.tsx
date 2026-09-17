import { createRoot } from "react-dom/client";
import "./index.css";
import { Portfolio } from "./portfolio";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
