import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { FaUser, FaEnvelope, FaEdit } from "react-icons/fa";
import "animate.css";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";

const MyProfilePage = () => {
  const auth = getAuth();
  const [user, setUser] = useState({
    name: "Guest User",
    email: "guest@example.com",
    image: "https://i.ibb.co/8c6Y8cq/default-avatar.jpg",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", image: "" });

  // ✅ User Info Fetch
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await currentUser.reload();
        setUser({
          name: currentUser.displayName || "User Name",
          email: currentUser.email,
          image:
            currentUser.photoURL ||
            "https://i.ibb.co/8c6Y8cq/default-avatar.jpg",
        });
      }
    });
    return () => unsubscribe();
  }, [auth]);

  // ✅ Input Validation
  const validateInputs = () => {
    let isValid = true;
    const newErrors = { name: "", image: "" };

    const nameRegex = /^[A-Za-z\s]{3,30}$/;
    if (!nameRegex.test(updatedName.trim())) {
      newErrors.name =
        "❌ Name must be 3–30 characters long and contain only letters or spaces.";
      isValid = false;
    }

    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;
    if (!urlRegex.test(updatedImage.trim())) {
      newErrors.image =
        "❌ Please enter a valid image URL (must end with .png, .jpg, .jpeg, .gif, or .webp).";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // ✅ Update Profile Handler
  const handleUpdateProfile = async () => {
    if (!auth.currentUser) {
      toast.error("⚠️ You are not logged in!");
      return;
    }

    if (!validateInputs()) {
      toast.error("⚠️ Please correct the errors before saving!");
      return;
    }

    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: updatedName.trim(),
        photoURL: updatedImage.trim(),
      });

      await auth.currentUser.reload();

      setUser({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        image: auth.currentUser.photoURL,
      });

      toast.success("✅ Profile updated successfully!");

      setUpdatedName("");
      setUpdatedImage("");
      setErrors({ name: "", image: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to update: " + error.message);
    }

    setLoading(false);
  };


   if(loading){
        <Loadin></Loadin>
      }
  return (
    <section>
      <title>PetCare - Profile</title>

      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/qbM24xf/ec6fcebfb6d4cf347e820b0264fbaae5.jpg')",
        }}
      >
        <Toaster />
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        {/* ✅ Always visible profile card */}
        <div className="relative z-10 bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 w-[90%] md:w-[500px] animate__animated animate__fadeInLeft">
          <div className="flex flex-col items-center text-center">
            <img
              src={user.image}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-pink-400 shadow-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaUser className="text-pink-400" /> {user.name}
            </h2>
            <p className="text-gray-600 mt-2 flex items-center gap-2">
              <FaEnvelope className="text-pink-400" /> {user.email}
            </p>

            <button
              className="btn px-6 mt-3 bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold border-none hover:scale-105 transition-transform duration-200 animate__animated animate__slideInUp"
              onClick={() => {
                setUpdatedName(user.name);
                setUpdatedImage(user.image);
                setErrors({ name: "", image: "" });
                setIsModalOpen(true);
              }}
            >
              <FaEdit /> Update Profile
            </button>

            <Link
              to="/"
              className="btn mt-4 bg-gradient-to-r from-blue-400 to-violet-400 text-white border-none hover:scale-105 transition-transform duration-200"
            >
              Go Home
            </Link>
          </div>
        </div>

        {/* ✅ Update Modal */}
        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box bg-base-200 animate__animated animate__fadeInUp">
              <h3 className="font-bold text-lg mb-4">Update Your Profile</h3>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  className={`input input-bordered w-full ${
                    errors.name && "border-red-500"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Profile Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/photo.jpg"
                  value={updatedImage}
                  onChange={(e) => setUpdatedImage(e.target.value)}
                  className={`input input-bordered w-full ${
                    errors.image && "border-red-500"
                  }`}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                )}
              </div>

              <div className="modal-action">
                <button
                  className={`btn px-8 bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold border-none hover:scale-105 transition-transform duration-200 ${
                    loading && "loading"
                  }`}
                  onClick={handleUpdateProfile}
                >
                  Save
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProfilePage;
