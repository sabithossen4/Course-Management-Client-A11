import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
     <div className="flex flex-col justify-center items-center min-h-screen ">
      <title>404-Error</title>
      <h1 className="text-7xl font-bold text-red-500 mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lg mb-6 text-blue-600">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;