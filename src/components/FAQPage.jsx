import React, { useState } from 'react';
import { FaQuestion, FaPlus, FaMinus } from 'react-icons/fa';
import Container from './Container';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's DreamLMS want to give you?",
      answer: "DreamLMS aims to provide you with comprehensive, high-quality educational resources that empower you to achieve your learning goals. We offer interactive courses, expert instructors, and a supportive community to ensure your success."
    },
    {
      question: "Why choose us for your education?",
      answer: "We stand out with our experienced instructors, flexible learning schedules, affordable pricing, and proven track record of student success. Our platform is designed with your learning journey in mind, offering personalized support every step of the way."
    },
    {
      question: "How We Provide Service For you?",
      answer: "We provide 24/7 access to course materials, live instructor support, interactive learning tools, progress tracking, and certification upon completion. Our dedicated support team is always ready to assist you with any questions or technical issues."
    },
    {
      question: "Do you have a monthly plan?",
      answer: "Yes! We offer flexible monthly subscription plans that give you full access to our course library. You can cancel anytime, and we also provide discounted annual plans for those who want to commit long-term to their learning journey."
    },
    {
      question: "Are you Affordable For Your Course",
      answer: "Absolutely! We believe quality education should be accessible to everyone. Our pricing is competitive and we offer various payment plans, student discounts, and financial aid options to ensure affordability for all learners."
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
                  <img src="/about-1-1.jpg" alt="" />
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