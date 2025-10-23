import React, { use, useState } from "react";
import { Link, useLocation, useNavigate  } from "react-router";
import { FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const ForgetPasswordPage = () => {
  const {resetPassword}=use(AuthContext)
  const navigate=useNavigate()

  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email first!");

    resetPassword(email)
      .then(() => {
        // console.log("sprups9ghsduhggseauhgseurheuherhg4erh",result);
        toast.success("Password reset email sent! Check your Gmail.");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        toast.error("Failed to send reset link. Try again!");
        console.error(error.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-pink-400 to-orange-400">
      <Toaster></Toaster>
      <div className="card w-full max-w-md shadow-2xl ">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-black mb-4">
            Forgot Password
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Enter your email to reset your password.
          </p>

          <form onSubmit={handleReset}>
            {/* Email */}
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <div className="flex items-center  rounded-lg px-3 mb-3">
              <FaEnvelope className=" mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="btn px-8 bg-gradient-to-r w-full from-pink-400 to-orange-400 text-white font-semibold border-none hover:scale-105 transition-transform duration-200"
            >
              Reset Password
            </button>
          </form>

             <button
            onClick={() => navigate("/login")}
            className="text-blue-500 mt-4 hover:underline text-center w-full"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
