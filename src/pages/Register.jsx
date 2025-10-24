import React, { useState, use } from "react";
import Lottie from "lottie-react";
import registerLottie from "../assets/lottie/register.json";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [emailError, setEmailError] = useState("");
  const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Validation
    if (password.length < 8) return setEmailError("Password should be at least 8 characters.");
    if (!/[A-Z]/.test(password)) return setEmailError("Password must contain 1 uppercase letter.");
    if (!/[a-z]/.test(password)) return setEmailError("Password must contain 1 lowercase letter.");
    if (!/[!@#$%^&*()\-_=+[{\]}\\|;:'\",<.>/?]+/.test(password))
      return setEmailError("Password must contain 1 special character.");
    if (password !== confirmPassword) return setEmailError("Password and Confirm Password must match.");

    setEmailError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(location.state ? location.state : "/");
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registered Successfully 🎉");
          })
          .catch((error) => {
            console.error(error);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(error.code || "Registration failed!");
      });
  };

  const handelGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
      <title>Register | DreamLMS</title>

      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-[90%] max-w-4xl flex flex-col lg:flex-row items-center gap-8">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie animationData={registerLottie} loop={true} className="w-80" />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white/90 rounded-xl shadow-lg p-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-6">
            Create Account
          </h1>

          <form onSubmit={handelRegister} className="space-y-4">
            <div>
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="input input-bordered w-full mt-1 focus:ring-2 focus:ring-indigo-400"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="font-semibold">Photo URL</label>
              <input
                type="text"
                name="photo"
                required
                className="input input-bordered w-full mt-1 focus:ring-2 focus:ring-pink-400"
                placeholder="Profile picture URL"
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                className="input input-bordered w-full mt-1 focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="font-semibold">Password</label>
              <input
                type="password"
                name="password"
                required
                className="input input-bordered w-full mt-1 focus:ring-2 focus:ring-indigo-400"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label className="font-semibold">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                required
                className="input input-bordered w-full mt-1 focus:ring-2 focus:ring-pink-400"
                placeholder="Re-enter password"
              />
            </div>

            {emailError && <p className="text-red-600 text-sm font-semibold">{emailError}</p>}

            <button
              type="submit"
              className="btn w-full mt-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white border-none hover:opacity-90"
            >
              Register
            </button>
          </form>

          <div className="divider text-gray-500">or</div>

          {/* Google Login */}
          <button
            onClick={handelGoogleLogin}
            className="btn w-full bg-white border border-gray-300 hover:bg-gray-100 flex items-center gap-2"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
            </svg>
            Continue with Google
          </button>

          <p className="text-center mt-4 text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline font-semibold">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
