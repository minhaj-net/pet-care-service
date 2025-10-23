import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import PetCareServices from '../Components/TreatmentPet/TreatmentPet';



const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <PetCareServices></PetCareServices>
      <Footer></Footer>
      
    </div>
  );
};

export default MainLayout;