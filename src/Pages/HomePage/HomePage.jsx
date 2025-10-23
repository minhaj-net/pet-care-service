import React from 'react';
import HeroSection from '../../Components/HeroSlider/HeroSlider';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import ServicesCard from '../../Components/ServicesCard/ServicesCard';
import WinterTips from '../../Components/WinterTips/WinterTips';
import WinterCareTips from '../../Components/WinterTips/WinterTips';
import ExpertVetsSection from '../../Components/ExpertVetsSection/ExpertVetsSection';
import PetCareServices from '../../Components/TreatmentPet/TreatmentPet';

const HomePage = () => {
  return (
    <div data-aos="fade-right">
      <title>PetCare-Home</title>
      <HeroSlider></HeroSlider>
      <ServicesCard></ServicesCard>
      <WinterCareTips></WinterCareTips>
      <ExpertVetsSection></ExpertVetsSection>
      <PetCareServices></PetCareServices>
    </div>
  );
};

export default HomePage;