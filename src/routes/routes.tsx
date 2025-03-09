import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
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

export default router;
