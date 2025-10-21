import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:HomePage
      },
      {
        path:"/services",
        Component:Services
      },
      {
        path:"/profile",
        Component:Profile
      },
    ]
  },
]);