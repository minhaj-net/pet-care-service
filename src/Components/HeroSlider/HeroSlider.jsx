import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "animate.css";
import { useLoaderData } from "react-router";

const HeroSlider = () => {
  const petData = useLoaderData();

  return (
    <section className=" h-screen  max-w-7xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {petData.map((pet, index) => (
          <SwiperSlide key={index}>
            <div  className="relative h-[700px] md:h-full lg:h-full w-full  flex flex-col md:flex-row items-center justify-between md:px-12 lg:px-20 px-6 text-center md:text-left">
              {/* Background Image */}
              <img
                src={pet.image}
                alt={pet.serviceName}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

              {/* Left Content */}
              <div className="relative z-10  text-white max-w-md md:max-w-lg animate__animated animate__fadeInLeft mb-8 md:mb-0">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 drop-shadow-lg leading-tight">
                  {pet.serviceName}
                </h1>
                <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6">
                  {pet.description}
                </p>
                <button className="btn bg-gradient-to-r from-pink-400 to-orange-400 border-none text-white text-sm sm:text-base px-4 sm:px-6">
                  Meet {pet.serviceName.split(" ")[0]}
                </button>
              </div>

              {/* Right Content */}
              <div className="relative z-10 text-white md:text-right max-w-md animate__animated animate__fadeInRight hidden sm:block">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3">
                  Warm Hearts, Furry Friends
                </h2>
                <p className="text-sm sm:text-base lg:text-lg opacity-90">
                  Discover adorable winter outfits that make tails wag.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots Styling */}
      <style>
        {`
          .swiper-pagination-bullets {
            bottom: 20px !important;
          }
          .swiper-pagination-bullet {
            background: white;
            opacity: 0.6;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: linear-gradient(to right, #ec4899, #fb923c);
            opacity: 1;
            width: 16px;
            border-radius: 10px;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSlider;
