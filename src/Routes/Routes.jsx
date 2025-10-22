import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import MyProfilePage from "../Pages/Profile/Profile";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUp from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:HomePage,
        loader:()=>fetch("/petCareData.json")
      },
      {
        path:"/services",
        Component:Services
      },
      {
        path:"/profile",
        Component:MyProfilePage
      },
      {
        path:"/service-details/:id",
        Component:ServiceDetails,
        loader:()=>fetch("/petCareData.json")
      },
    ]
  },
  {
    path:"/login",
    Component:LoginPage,
    loader:()=>fetch("/petCareData.json")
  },
  {
    path:"/signup",
    Component:SignUp
  }
]);