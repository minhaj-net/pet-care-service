import React, { useEffect } from "react";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import WinterCareTips from "../../Components/WinterTips/WinterTips";
import ExpertVetsSection from "../../Components/ExpertVetsSection/ExpertVetsSection";
import PetCareServices from "../../Components/TreatmentPet/TreatmentPet";
import { Toaster } from "react-hot-toast";
import AOS from "aos"; // ✅ AOS JS import
import "aos/dist/aos.css"; // ✅ AOS CSS import

const HomePage = () => {
  // ✅ Initialize AOS once when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation সময় (milliseconds)
      easing: "ease-in-out", // animation smoothness
      once: false, // scroll করলে বারবার animate হবে
    });
  }, []);

  return (
    <div>
      <title>PetCare - Home</title>

      <div data-aos="fade-up">
        <HeroSlider />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <ServicesCard />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <WinterCareTips />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <ExpertVetsSection />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <PetCareServices />
      </div>

      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
};

export default HomePage;
