import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Dashboard} from "./components/Dashboard";
import "./i18n";
import "./index.css";
import {StoreProvider} from "./state";
import {Assessment} from "./components/Assessment/Assessment.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: "/assessments",
        element: <Assessment/>
    }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <StoreProvider>
            <RouterProvider router={router}/>
        </StoreProvider>
    </React.StrictMode>,
);
