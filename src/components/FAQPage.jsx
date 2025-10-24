import React, { useState } from 'react';
import { FaQuestion, FaPlus, FaMinus } from 'react-icons/fa';
import Container from './Container';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    question: "What does our Course Management System offer?",
    answer:
      "Our Course Management System provides a complete solution for organizing, delivering, and tracking online courses. It helps instructors manage students, assignments, and grades efficiently, while learners can easily access materials and monitor their progress."
  },
  {
    question: "Why choose our Course Management System?",
    answer:
      "We offer a user-friendly interface, real-time progress tracking, automated grading, and secure data management. Our system is designed to make teaching and learning seamless for both educators and students."
  },
  {
    question: "How do we deliver our services?",
    answer:
      "We provide 24/7 access to the platform, allowing instructors to upload materials, create quizzes, and communicate with students anytime. Students can enroll, access lessons, submit assignments, and receive instant feedback easily."
  },
  {
    question: "Do you offer subscription or one-time payment plans?",
    answer:
      "Yes! We offer both flexible monthly subscription and one-time payment options based on your institution’s needs. You can upgrade, cancel, or renew your plan anytime with no hidden fees."
  },
  {
    question: "Is our Course Management System affordable?",
    answer:
      "Absolutely! Our pricing is designed to fit educational institutions of all sizes. We offer student-friendly plans, institutional discounts, and custom packages to ensure affordability without compromising quality."
  }
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50  py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center pb-12">
          
          {/* Left Side - Image Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              
              
              {/* Image placeholder - you can replace with actual image */}
              <div className="relative">
                <div className="flex justify-center items-center space-x-4">
                  <img className='w-[490px] h-[590px]' src="/about-1-1.jpg" alt="" />
                </div>
                
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Section */}
          <div>
            <div className="mb-8">
              <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                FAQs
              </span>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-600 text-lg">
                Explore detailed answers to the most common questions about our platform.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      {openIndex === index ? (
                        <FaMinus className="text-gray-600 text-sm" />
                      ) : (
                        <FaPlus className="text-gray-600 text-sm" />
                      )}
                    </span>
                  </button>
                  
                  {/* Answer - Collapsible */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
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