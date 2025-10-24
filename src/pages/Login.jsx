import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn, googleSignIn, forgetPassword } = use(AuthContext);
  const [emailError, setEmailError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Password Validation
    if (password.length < 8)
      return setEmailError("Password should be at least 8 characters.");
    if (!/[A-Z]/.test(password))
      return setEmailError("Password must contain 1 uppercase letter.");
    if (!/[a-z]/.test(password))
      return setEmailError("Password must contain 1 lowercase letter.");
    if (!/[!@#$%^&*()\-_=+[{\]}\\|;:'\",<.>/?]+/.test(password))
      return setEmailError("Password must contain 1 special character.");
    else setEmailError("");

    signIn(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Login Successfully 🎉");
      })
      .catch((error) => {
        setEmailError(error.message);
        toast.error(error.code);
      });
  };

  const handelGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Google Sign-in Successful 🎯");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) return setEmailError("Please enter your email first.");
    forgetPassword(email)
      .then(() =>
        toast.info("Password reset email sent! Check your inbox 📩")
      )
      .catch((error) => setEmailError(error.message));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <title>Login | DreamLMS</title>

      {/* Login Card */}
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-[90%] max-w-md">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handelLogin} className="space-y-4">
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              required
              placeholder="Enter your email"
              className="input input-bordered w-full mt-1 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="font-semibold">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                required
                placeholder="Enter your password"
                className="input input-bordered w-full mt-1 focus:ring-2 focus:ring-pink-400"
              />
              <div
                className="absolute right-3 top-4 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          {emailError && (
            <p className="text-red-600 text-sm font-semibold">{emailError}</p>
          )}

          <div className="text-right">
            <button
              type="button"
              onClick={handleForgetPassword}
              className="text-indigo-600 hover:underline text-sm"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="btn w-full mt-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white border-none hover:opacity-90"
          >
            Login
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
          New here?{" "}
          <Link
            to="/register"
            className="text-pink-600 hover:underline font-semibold"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
