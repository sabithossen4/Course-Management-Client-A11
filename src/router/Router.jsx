import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AddCourses from "../pages/AddCourses";
import PrivateRoute from "../context/PrivateRoute";
import ManageCourses from "../pages/ManageCourses";
import EditCourse from "../pages/EditCourse";
import MyEnrolledCourses from "../pages/MyEnrolledCourses";
import CourseDetails from "../pages/CourseDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },      
      {
        path: "/addcourses",
        Component: AddCourses,
      },           
      {
        path: "/managecourses",
        Component: ManageCourses,
      },      
      {
        path: "/editcourse/:id",
        Component: EditCourse,
      },      
      {
        path: "/coursedetails/:id",
        Component: CourseDetails,
      },      
      {
        path: "/myenrolledcourses",
        Component: MyEnrolledCourses,
      },                
    ],
  },
]);