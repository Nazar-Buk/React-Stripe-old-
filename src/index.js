import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "pay1",
    //     element: <Pay />,
    //   },
    //   {
    //     path: "/success1",
    //     element: <Success />,
    //   },
    // ],
  },
  {
    path: "pay",
    element: <Pay />,
  },
  {
    path: "success",
    element: <Success />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
