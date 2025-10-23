import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "animate.css";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const ServiceCard = () => {
  const cardData = useLoaderData();

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-pink-50 to-white">
      
      <div className="text-center mb-12 animate__animated animate__fadeInDown">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Popular Winter Care Services
        </h2>
        <p className="text-gray-600 text-lg">
          Keep your furry friends cozy, clean, and cared for this winter season ❄️
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}                // Infinite loop
        freeMode={true}            // Free mode for continuous motion
        speed={3000}               // Speed of sliding (higher = slower)
        autoplay={{ delay: 0, disableOnInteraction: false }} // Continuous
        slidesPerView={5}          // Number of visible cards
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="max-w-7xl mx-auto px-4 md:px-10"
      >
        {cardData.slice(0, 10).map((service, index) => (
          <SwiperSlide key={index}>
            <div className="card bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 animate__animated animate__fadeInUp h-[480px] flex flex-col">
              <figure className="relative h-56">
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                  Winter Care
                </span>
              </figure>
              <div className="card-body text-center p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.serviceName}
                  </h3>
                  <div className="flex justify-center items-center mb-3">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-gray-700 font-medium">
                      {service.rating || "4.5"}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-pink-500 mb-4">
                    ${service.price || "25.00"}
                  </p>
                </div>
                <Link to={`/service-details/${service.serviceId}`} className="btn bg-gradient-to-r from-pink-400 to-orange-400 border-none text-white hover:scale-105 transition-transform mt-auto">
                  View Details
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};


export default ServiceCard;
