import React from "react";
import "animate.css";

const MyProfilePage = () => {
  // Sample static user data
  const user = {
    name: "Minhaj Uddin",
    email: "minhaj@example.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with null to test initials
  };

  // Function to get initials if image is missing
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 animate__animated animate__fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center relative overflow-hidden">
        {/* Optional background illustration */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-blue-200 to-blue-50 rounded-t-2xl -z-10"></div>

        {/* Profile Image */}
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-100 shadow-lg mb-6 object-cover"
          />
        ) : (
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-blue-100 shadow-lg mb-6 flex items-center justify-center bg-blue-200 text-3xl font-bold text-white">
            {getInitials(user.name)}
          </div>
        )}

        {/* User Info */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{user.name}</h2>
        <p className="text-gray-500 mb-6">{user.email}</p>

        {/* Update Profile Button */}
        <button className="btn bg-gradient-to-r from-blue-400 to-blue-500 text-white w-full hover:scale-105 transition-transform border-none">
          Update Profile
        </button>
      </div>
    </section>
  );
};

export default MyProfilePage;
