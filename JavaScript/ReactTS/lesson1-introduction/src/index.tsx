import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RestProvider } from "./context/RestContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RestProvider>
      <App />
    </RestProvider>
  </React.StrictMode>
);
