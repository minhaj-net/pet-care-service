// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { FcGoogle } from "react-icons/fc";
// import { Link } from "react-router";
// import { auth } from "../../Firebase/firebase.init";
// import { toast } from "react-toastify";
// import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const SignUp = () => {
  // const [showEye, setShowEye] = useState();
  // const habdleSignUp = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password);
  //   const regex6Character = /^.{6,}$/;
  //   const regexCase = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  //   const regexSymble = /[!@#$%^&*(),.?":{}|<>]/;
  //   if (!regex6Character.test(password)) {
  //     toast.error("Password must be at least 6 characters long");
  //     return;
  //   } else if (!regexCase.test(password)) {
  //     toast.error(
  //       "Password must contain at least one lowercase and one uppercase letter."
  //     );
  //     return;
  //   } else if (!regexSymble.test(password)) {
  //     toast.error("Password must contain at least one special character.");
  //     return;
  //   }

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       e.target.reset();
  //       toast.success("Sign up Succecfull");
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };
  // const handleEyeShow = () => {
  //   setShowEye(!showEye);
  // };

  return (
  <div>
    <Navbar></Navbar>
      <div className="hero bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden min-h-screen">
      <title>Firebase-Sign up</title>
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>
      <div className="hero-content flex  justify-between  gap-63  flex-col lg:flex-row">
        <div className="text-center   lg:text-left">
          <h1 className="text-4xl font-bold">Create Your Account</h1>
          <p className="py-6">
            Join our community and unlock exclusive features. Your journey
            begins here!
          </p>
        </div>
        <div
          className="card  max-w-sm shrink-0 shadow-2xl
        w-full  backdrop-blur-lg bg-white/10 border border-white/20  rounded-2xl p-4
        "
        >
          <div className="card-body">
            <form>
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
                    type="password"
                    placeholder="*******"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <p
                    className=" absolute top-[13px] cursor-alias right-3"
            
                  >
                   
                  </p>
                </div>
                <button className="btn  w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold border-none hover:scale-105 transition-transform duration-200">
                  Sign up
                </button>
              </fieldset>

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