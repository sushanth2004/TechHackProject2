import React from "react";
import ReactDom from "react-dom/client";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const root = ReactDom.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
