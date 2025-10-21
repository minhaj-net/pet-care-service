import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/Profile/Profile";
import HeroSlider from "../Pages/HomePage/HomePage";

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
        Component:Profile
      },
    ]
  },
]);