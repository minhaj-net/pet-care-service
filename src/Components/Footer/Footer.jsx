import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-6 pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* ===== Contact Info ===== */}
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <h3 className="text-xl font-bold text-pink-400 mb-3">Contact Info</h3>
          <ul className="space-y-2">
            <li>📍 123 Pet Street, Dhaka, Bangladesh</li>
            <li>📞 +880 1234 567 890</li>
            <li>📧 support@petcare.com</li>
          </ul>
        </div>

        {/* ===== Social Links ===== */}
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <h3 className="text-xl font-bold text-pink-400 mb-3">Social Links</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition duration-300 animate__animated animate__bounce animate__infinite animate__slow"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition duration-300 animate__animated animate__bounce animate__infinite animate__slow"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition duration-300 animate__animated animate__bounce animate__infinite animate__slow"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition duration-300 animate__animated animate__bounce animate__infinite animate__slow"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* ===== Privacy Policy ===== */}
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h3 className="text-xl font-bold text-pink-400 mb-3">Privacy Policy</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer transition">Terms & Conditions</li>
            <li className="hover:text-primary cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-primary cursor-pointer transition">Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="border-t mt-10 pt-4 text-center text-sm text-gray-500 animate__animated animate__fadeIn">
        © {new Date().getFullYear()} <span className="text-pink-400 font-semibold">PetCare</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
