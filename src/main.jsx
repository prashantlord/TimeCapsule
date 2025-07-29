import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home.jsx";
import Create from "./Pages/Create.jsx";
import MyCapsule from "./Pages/MyCapsule.jsx";
import PublicCapsule from "./Pages/PublicCapsule.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/mycapsule",
        element: <MyCapsule />,
      },
      {
        path: "/publiccapsule",
        element: <PublicCapsule />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
