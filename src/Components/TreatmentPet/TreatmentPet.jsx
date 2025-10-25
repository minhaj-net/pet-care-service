import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "animate.css";

const PetCareServices = () => {
  const services = [
    {
      title: "Comprehensive General Health Check",
      desc: "Complete assessment ensuring overall pet health and early detection.",
      img: "https://i.ibb.co.com/pvQBnf0Q/73df512df24b3b1c48bd5a73a3db8a83.jpg",
    },
    {
      title: "Specialized Surgical Procedures",
      desc: "Advanced surgeries performed with precision, safety, and compassionate care.",
      img: "https://i.ibb.co.com/WWPxWFsZ/a9455094318a3210b12ce72a9be048c4.jpg",
    },
    {
      title: "Pet Nutritional Counseling and Planning",
      desc: "Customized diet plans to support optimal health and longevity.",
      img: "https://i.ibb.co.com/pBKrm1x2/e08975f65db9a799ff1e727c67e539d7.jpg",
    },
    {
      title: "Professional Pet Trainings and Behavior Programs",
      desc: "Effective methods to improve obedience, social skills, and behavior.",
      img: "https://i.ibb.co.com/svX6XFhK/f0e6db9c07ceeb998bd4da3444f3f895.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12  bg-linear-to-b from-blue-50 via-white to-blue-100 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* First Card (Special Style) */}
      <div className=" text-white rounded-2xl  animate__animated animate__fadeInLeft shadow-lg">
        <img
          src="https://i.ibb.co.com/dsVHzsmC/035d153eb68e383694fa548c65a70f23.jpg"
          alt="Dalmatian"
          className="w-full h-[380px] rounded-2xl object-cover"
        />
      </div>
         {/* Service Cards */}
      {services.map((service, index) => (
            <div
            key={index}
            className="group bg-base-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate__animated animate__fadeInUp"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-500 mb-3 text-sm">{service.desc}</p>
                
            {/* Animated Arrow + Text */}
            <div className="flex items-center space-x-2 text-orange-500 text-lg font-medium">
              <FaArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
              <span className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-sm">
                Read More
              </span>
            </div>
          </div>
          
                ))}
          
                {/* Last Image Card */}
                <div className="rounded-2xl overflow-hidden shadow-lg animate__animated animate__fadeInRight">
                  <img
                    src="https://i.ibb.co.com/NdK8SzVf/07fad780aad7d4d9b57bad97cac2c057.jpg"
          alt="Pet Doctor"
          className="w-full h-[380px] object-cover"
        />
      </div>
    </div>
  );
};

export default PetCareServices;
