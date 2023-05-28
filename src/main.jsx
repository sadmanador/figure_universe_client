import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import UserContext, { AuthContext } from "./contexts/UserContext/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={router}></RouterProvider>
    </UserContext>
  </React.StrictMode>
);
