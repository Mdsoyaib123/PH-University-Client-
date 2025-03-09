import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { RoutesGenerator } from "../utlis/routesGeneretor";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App />,
    children: RoutesGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: RoutesGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: RoutesGenerator(studentPaths),
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
