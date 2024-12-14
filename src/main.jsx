import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import History from "./components/history";
import Plan from "./components/plan";
import Instruction from "./components/instruction";
import Layout from "./components/layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/plan",
        element: <Plan />,
      },
      {
        path: "/help",
        element: <Instruction />,
      },
      {
        path: "*",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
