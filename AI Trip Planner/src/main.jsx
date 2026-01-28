import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./App.jsx"; // <--- This must match your filename!
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);