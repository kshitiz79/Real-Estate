import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ErrorBoundary>
);
