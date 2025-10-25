import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "animate.css";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const ServiceCard = () => {
  const cardData = useLoaderData();

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-blue-50 via-pink-50 to-white">
  <title>PetCare-Service</title>

  {/* Section Header */}
  <div className="text-center mb-12 animate__animated animate__fadeInDown">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
      Popular Winter Care Services
    </h2>
    <p className="text-gray-600 text-sm sm:text-base md:text-lg">
      Keep your furry friends cozy, clean, and cared for this winter season ❄️
    </p>
  </div>

  {/* First 8 Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {cardData.slice(0, 8).map((service, index) => (
      <div
        key={index}
        className="card bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 animate__animated animate__fadeInUp flex flex-col h-full"
      >
        <figure className="relative h-56 sm:h-60 md:h-64">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
            {service.category}
          </span>
        </figure>
        <div className="card-body text-center p-5 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              {service.serviceName}
            </h3>
            <p className="text-md sm:text-lg font-bold text-pink-500 mb-4">
              ${service.price || "25.00"}
            </p>
          </div>
            <div className="flex justify-between items-center">
                   <div className="flex justify-center items-center ">
                     <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-gray-700 font-medium">
                      {service.rating || "4.5"}
                    </span>
                   </div>
                   <div className="font-medium text-sm">
                    <span className="text-pink-400">slot : <span className="font-bold "> {service.slotsAvailable}</span></span>
                   </div>
                  </div>
          <Link
            to={`/service-details/${service.serviceId}`}
            className="btn bg-gradient-to-r from-pink-400 to-orange-400 border-none text-white hover:scale-105 transition-transform mt-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    ))}
  </div>

  {/* Remaining Cards */}
  <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
    {cardData.slice(8).map((service, index) => (
      <div
        key={index}
        className="card bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 animate__animated animate__fadeInUp flex flex-col h-full"
      >
        <figure className="relative h-56 sm:h-60 md:h-64">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
            {service.category}
          </span>
        </figure>
        <div className="card-body text-center p-5 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              {service.serviceName}
            </h3>
            <p className="text-md sm:text-lg font-bold text-pink-500 mb-4">
              ${service.price || "25.00"}
            </p>
          </div>
            <div className="flex justify-between items-center">
                   <div className="flex justify-center items-center ">
                     <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-gray-700 font-medium">
                      {service.rating || "4.5"}
                    </span>
                   </div>
                   <div className="font-medium text-sm">
                    <span className="text-pink-400">slot : <span className="font-bold "> {service.slotsAvailable}</span></span>
                   </div>
                  </div>
          <Link
            to={`/service-details/${service.serviceId}`}
            className="btn bg-gradient-to-r from-pink-400 to-orange-400 border-none text-white hover:scale-105 transition-transform mt-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};


export default ServiceCard;
