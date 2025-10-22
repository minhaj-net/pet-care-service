import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "animate.css";

const ExpertVetsSection = () => {
  // Fake JSON data for vets
  const vets = [
    {
      name: "Dr. Emily Thompson",
      specialty: "Canine Expert",
      description: "Passionate about dog health and behavior, ensuring happy and healthy pets.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Dr. Michael Lee",
      specialty: "Feline Specialist",
      description: "Experienced in feline care, nutrition, and wellness programs for cats.",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Dr. Sarah Johnson",
      specialty: "Exotic Pets",
      description: "Expert in exotic animals including rabbits, birds, and reptiles.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Dr. Daniel Brown",
      specialty: "Senior Pets Care",
      description: "Specializes in elderly pets, providing comfort and quality care.",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 animate__animated animate__fadeInDown">
          Meet Our Expert Vets
        </h2>
        <p className="text-gray-600 text-lg animate__animated animate__fadeInDown animate__delay-1s">
          Our caring professionals are here to help your pets thrive.
        </p>
      </div>

      {/* Vets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {vets.map((vet, index) => (
          <div
            key={index}
            className="card bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate__animated animate__fadeInUp"
          >
            {/* Profile Image */}
            <img
              src={vet.image}
              alt={vet.name}
              className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-pink-100 shadow-md"
            />
            {/* Name & Specialty */}
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{vet.name}</h3>
            <p className="text-pink-400 font-medium mb-3">{vet.specialty}</p>
            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{vet.description}</p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-auto">
              <a href={vet.social.facebook} className="text-pink-500 hover:text-blue-700 transition-colors">
                <FaFacebookF />
              </a>
              <a href={vet.social.twitter} className="text-pink-400 hover:text-blue-600 transition-colors">
                <FaTwitter />
              </a>
              <a href={vet.social.instagram} className="text-pink-500 hover:text-pink-700 transition-colors">
                <FaInstagram />
              </a>
            </div>
            {/* Optional View Profile Button */}
            <button className="btn  w-full mt-4 bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold border-none hover:scale-105 transition-transform duration-200">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertVetsSection;
