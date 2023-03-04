import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './index.css'
import "../dist/output.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact from "./pages/Contact/Contact";
import Reports from "./pages/Contact/Reports/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/contact",
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
