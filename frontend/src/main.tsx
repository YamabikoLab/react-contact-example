import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import Authentication from "./pages/Authentication/Authentication";
import Contact from "./pages/Contact/Contact";
import Database from "./pages/Database/Database";
import Functions from "./pages/Functions/Functions";
import Hosting from "./pages/Hosting/Hosting";
import MachineLearning from "./pages/MachineLearning/MachineLearning";
import Storage from "./pages/Storage/Storage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "authentication",
        element: <Authentication />,
      },
      {
        path: "database",
        element: <Database />,
      },
      {
        path: "functions",
        element: <Functions />,
      },
      {
        path: "hosting",
        element: <Hosting />,
      },
      {
        path: "machine-learning",
        element: <MachineLearning />,
      },
      {
        path: "storage",
        element: <Storage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
