import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider, ErrorBoundary } from "@rollbar/react";

const rollbarConfig = {
  accessToken: "bf37ad196b2b41129c3f6dbd0bc212d5",
  environment: "testenv",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
