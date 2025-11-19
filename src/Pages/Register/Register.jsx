import { Link, useLocation, useNavigate } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import { use, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const { createUser, googleSignIn, updateUser, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const [showPassword, setShowPassword] = useState();
  console.log(createUser);
  const hanleRegister = (e) => {
    e.preventDefault();
    console.log("Register button submitted");
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const minLengthRegex = /^.{6,}$/;
    const regexCase = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!minLengthRegex.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    } else if (!regexCase.test(password)) {
      setError(
        "Password must contain at least one uppercase and one lowercase letter"
      );
      return;
    }

    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = result.user;
        toast.success("Sign up Successfully ");
        e.target.reset();
        navigate(`${location.state ? location.state : "/"}`);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((err) => {
            console.log(err);
            setUser(user);
          });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };
  const handleGooglesignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Sign up Succesfull");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Toaster></Toaster>
      <Navbar></Navbar>
      <div className="hero bg-linear-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden min-h-screen">
        <title>Firebase-Sign up</title>
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
        </div>
        <div className="hero-content flex  justify-between gap-5 md:gap-63 lg:63  flex-col lg:flex-row">
          <div className="text-center   lg:text-left">
            <h1 className="text-4xl font-bold">Create Your Account</h1>
            <p className="py-6">
              Join the PetCare family today and ensure your furry friends enjoy
              comfort, warmth, and happiness always.
            </p>
          </div>
          <div
            className="card  max-w-sm shrink-0 shadow-2xl
        w-full  backdrop-blur-lg bg-white/10 border border-white/20  rounded-2xl p-4
        "
          >
            <div className="card-body">
              <form onSubmit={hanleRegister}>
                <h1 className="font-bold text-4xl mb-2">Sign Up</h1>
                <fieldset className="fieldset">
                  {/* Photo field */}
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {/* Photo field */}
                  <label className="label">Photo URL</label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Photo URl"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {/* email field */}
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {/* password field */}
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="*******"
                      className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                      className="absolute top-[13px] right-5"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <p className="text-red-500 font-medium">{error}</p>
                  <button className="btn  w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold border-none hover:scale-105 transition-transform duration-200">
                    Sign up
                  </button>
                  {/* Devider */}
                  <div className="flex items-center justify-center gap-2 my-2">
                    <div className="h-px w-16 bg-white/30"></div>
                    <span className="text-sm text-white/70">or</span>
                    <div className="h-px w-16 bg-white/30"></div>
                  </div>
                  {/* Google sign in button */}
                </fieldset>
                <button
                  onClick={handleGooglesignIn}
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <FcGoogle /> Continue With Google
                </button>

                <p className="text-gray-100  mt-6 text-center">
                  {" "}
                  have account ?{" "}
                  <Link to="/login" className="text-amber-500">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
