import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./i18n";
import "./index.css";
import { AssessmentResult } from "./screens/AssessmentResult";
import { Dashboard } from "./screens/Dashboard";
import { StoreProvider } from "./state";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/assessment-result/:id",
    element: <AssessmentResult />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>,
);
