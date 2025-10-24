import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
     <div className="flex flex-col justify-center items-center min-h-screen bg-amber-100">
      <title>404-Error</title>
      <h1 className="text-7xl font-bold text-red-500 mb-6 ">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-neutral-950">Page Not Found</h2>
      <p className="text-lg mb-6 text-[#1E88E5]">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="px-6 py-3 bg-[#1E88E5] text-white rounded-lg hover:[#1E88E5] transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;