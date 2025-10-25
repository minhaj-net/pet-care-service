import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaDollarSign, FaStar, FaTag } from "react-icons/fa";
import "animate.css";
import { Link, useLoaderData, useParams } from "react-router";
import { RiArrowGoBackFill } from "react-icons/ri";

const ServiceDetails = () => {
  const {id}=useParams()
  console.log(id);
  const cardData=useLoaderData()
  console.log(cardData);
  const [data,SetData]=useState({})
  console.log(data);


  useEffect(() => {
    const newDetails = cardData.find((singleNews) => singleNews.serviceId == id);
    SetData(newDetails);
  }, [cardData, id]);

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({ name: "", email: "" });
  };

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 via-white to-blue-100 animate__animated animate__fadeIn">
      <title>Petcare-Service Details</title>
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        {/* Service Banner */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <img
            src={data.image}
            alt={data.serviceName}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Service Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {data.serviceName}
          </h2>
          <p className="text-gray-700 text-lg mb-6">{data.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <FaUser className="text-pink-400" /> <span>{data.providerName}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-pink-400" /> <span>{data.providerEmail}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaDollarSign className="text-pink-400" /> <span>${data.price}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaStar className="text-yellow-400" /> <span>{data.rating}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaTag className="text-pink-400" /> <span>{data.category}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaUser className="text-pink-400" /> <span>Service ID: {data .serviceId}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 mb-8" />

        {/* Book Service Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Book Service
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="input input-bordered w-full rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="input input-bordered w-full rounded-lg"
                required
              />
            </div>
            <div className="md:col-span-2 flex justify-end gap-4">
              <Link
                to="/"
                className="btn px-8 bg-gradient-to-r from-blue-400 to-violet-400 text-white font-semibold border-none hover:scale-105 transition-transform duration-200 "
              >
               <RiArrowGoBackFill /> Go Back
              </Link>
              <button
                type="submit"
                className="btn px-8 bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold border-none hover:scale-105 transition-transform duration-200 "
              >
                Book Now
              </button>
            </div>
          </form>

          {/* Toast Notification */}
          {showToast && (
            <div className="toast toast-top toast-end mt-4">
              <div className="alert alert-success shadow-lg">
                <span>Booking Successful!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
