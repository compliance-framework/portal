import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./i18n";
import "./index.css";
import { AssessementResult } from "./screens/AssessmentResult/AssessmentResult";
import { Dashboard } from "./screens/Dashboard";
import { StoreProvider } from "./state";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/assessment-result/:id",
    element: <AssessementResult />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>,
);
