import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-lime-900 text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        
        {/* Column 1: Logo & slogan */}
        <div>
          <h1 className="text-3xl font-bold mb-4">CourseHub</h1>
          <p>Learn. Grow. Succeed. Empower yourself with knowledge every day.</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link >Courses</Link></li>
            <li><Link >About Us</Link></li>
            <li><Link >Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
          <ul className="space-y-2">
            <li><Link to="/managecourses">My Courses</Link></li>
            
            <li><Link to="/addcourses">Add New Course</Link></li>
            <li><Link to="/myenrolledcourses">EnrolledCourses</Link></li>
            <li><Link >FAQ</Link></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} CourseHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
