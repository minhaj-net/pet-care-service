import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import MyProfilePage from "../Pages/Profile/Profile";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUp from "../Pages/Register/Register";
import Loading from "../Components/Loading/Loading";
import PrivateRoute from "../Provider/PrivateRoute";
import ForgetPasswordPage from "../Pages/ForgetPasswordPage/ForgetPasswordPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        Component:HomePage,
        loader:()=>fetch("/petCareData.json"),
        hydrateFallbackElement:Loading
      },
      {
        path:"/services",
        Component:Services,
        loader:()=>fetch("/petCareData.json"),
      },
      {
        path:"/profile",
        Component:MyProfilePage
      },
      {
        path:"/service-details/:id",
        element:<PrivateRoute>
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>,
        loader:()=>fetch("/petCareData.json"),
        hydrateFallbackElement:Loading,
      },
    ]
  },
  {
    path:"/login",
    Component:LoginPage,
    loader:()=>fetch("/petCareData.json"),
    hydrateFallbackElement:Loading,
  },
  {
    path:"/signup",
    Component:SignUp
  },
  {
    path:"/forget-password",
    Component:ForgetPasswordPage
  },
]);