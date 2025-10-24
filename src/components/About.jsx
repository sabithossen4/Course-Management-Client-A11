import React from 'react';
import { FaBook, FaBriefcase } from 'react-icons/fa';
import Container from './Container';

export default function About() {
  const features = [
    {
      icon: <FaBook className="text-2xl text-blue-600" />,
      title: "Learn from anywhere",
      description: "Learning from anywhere has become a transform aspect of modern education, allowing individuals."
    },
    {
      icon: <FaBriefcase className="text-2xl text-yellow-600" />,
      title: "Expert Mentors",
      description: "Expert mentors are invaluable assets in any field, providing seasoned guidance knowledge."
    }
  ];

  return (
    <div  className=" bg-white py-16 px-4">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image Section */}
          <div className="relative">
            {/* Main image container with decorative borders */}
            <div className="relative">
              {/* Purple top-left border */}
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#1E88E5] rounded-tl-[80px] z-0"></div>
              
              {/* Main image */}
              <div className="relative z-10 rounded-br-[100px] overflow-hidden shadow-2xl">
                <img 
                  src="/feature-4-1.jpg" 
                  alt="Students learning together" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Pink bottom-right border */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-pink-500 rounded-br-[80px] z-0"></div>
              
              {/* Yellow arrow decoration */}
              <div className="absolute bottom-0 left-0 z-20">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400 text-4xl font-bold">«</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-yellow-400 transform rotate-45"></div>
                    <div className="w-3 h-3 bg-pink-400 transform rotate-45"></div>
                    <div className="w-3 h-3 bg-blue-400 transform rotate-45"></div>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className="space-y-8">
            {/* About badge */}
            <div>
              <span className="text-pink-500 font-semibold text-lg">About</span>
            </div>

            {/* Main heading */}
            <div>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Empowering Learning,<br />Inspiring Growth
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At DreamsLMS, we make education accessible to all with interactive courses and expert-led content. Learn anytime, anywhere, and achieve your goals seamlessly.
              </p>
            </div>

            {/* Feature cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Icon container */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
                    index === 0 ? 'bg-blue-100' : 'bg-yellow-100'
                  }`}>
                    {feature.icon}
                  </div>
                  
                  {/* Text content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}