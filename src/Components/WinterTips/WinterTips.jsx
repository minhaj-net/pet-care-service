import React from "react";
import { FaSnowflake, FaThermometerHalf, FaDog, FaPaw, FaHeart } from "react-icons/fa";

const WinterCareTips = () => {
  // Fake JSON data for tips
  const tips = [
    {
      title: "Keep Pets Warm",
      description: "Provide cozy blankets or pet sweaters to protect from the cold.",
      icon: <FaThermometerHalf className="text-pink-400" />,
    },
    {
      title: "Limit Outdoor Time",
      description: "Reduce prolonged outdoor exposure during freezing temperatures.",
      icon: <FaDog className="text-pink-400" />,
    },
    {
      title: "Protect Paws",
      description: "Use pet-safe booties or check paws for ice and salt after walks.",
      icon: <FaPaw className="text-pink-400" />,
    },
    {
      title: "Hydration is Key",
      description: "Ensure your pet has fresh water; winter air can be dehydrating.",
      icon: <FaSnowflake className="text-pink-400" />,
    },
    {
      title: "Healthy Diet",
      description: "Maintain proper nutrition to keep your pets healthy and energetic.",
      icon: <FaHeart className="text-pink-400" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Winter Care Tips for Pets
        </h2>
        <p className="text-gray-600 text-lg">
          Keep your furry friends safe and warm this winter ❄️
        </p>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="card bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-3xl mb-4">{tip.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinterCareTips;
