import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import "./i18n";
import "./index.css";
import { StoreProvider } from "./state";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>,
);
