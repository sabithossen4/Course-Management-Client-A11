import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4">{children}</div>
);

const Categories = () => {
  const categories = [
    { 
      img: "/catagory/course-cat-03.jpg", 
      title: "Web Development",
      mentors: "64 Mentors",
      color: "#FF6B6B"
    },
    { 
      img: "/catagory/course-cat-01.jpg", 
      title: "Design",
      mentors: "52 Mentors", 
      color: "#4ECDC4"
    },
    { 
      img: "/catagory/course-cat-02.jpg", 
      title: "Marketing Strategy",
      mentors: "64 Mentors",
      color: "#45B7D1"
    },
    { 
      img: "/catagory/course-cat-03.jpg", 
      title: "Programming",
      mentors: "78 Mentors",
      color: "#FFA07A"
    },
    { 
      img: "/catagory/course-cat-04.jpg", 
      title: "UI/UX",
      mentors: "45 Mentors",
      color: "#98D8C8"
    },
    { 
      img: "/catagory/course-cat-02.jpg", 
      title: "Business",
      mentors: "56 Mentors",
      color: "#F7DC6F"
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <Container>
        <h1 className="text-[#202124] text-4xl font-bold mb-2">Course Categories</h1>
        <div className="flex gap-2 mb-4">
          <button className="bg-[#1E88E5] p-1 px-2 rounded-2xl"></button>
          <button className="bg-[#1E88E5] p-1 px-4 rounded-2xl"></button>
        </div>
        <p className="text-[#3f5264] text-[16px] font-medium mb-12">
          Organize and Explore Courses by Category
        </p>

        <div className="w-full">
          <Swiper
            loop={true}
            spaceBetween={24}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
          >
            {categories.map((cat, i) => (
              <SwiperSlide key={i}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100">
                  {/* Image with overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Hand-drawn style decorative elements */}
                    <div className="absolute top-4 right-4">
                      <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-80">
                        <circle cx="20" cy="20" r="18" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4,4"/>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 relative">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-800 font-bold text-xl group-hover:text-[#1E88E5] transition-colors duration-300">
                        {cat.title}
                      </h3>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <p className="text-gray-500 text-sm font-medium">{cat.mentors}</p>
                    
                    {/* Decorative bottom accent */}
                    <div 
                      className="absolute bottom-0 left-0 h-1 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{ backgroundColor: cat.color }}
                    ></div>
                  </div>

                  {/* Sketch-style corner decoration */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <svg width="100%" height="100%" className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                      <line x1="0" y1="0" x2="30" y2="0" stroke={cat.color} strokeWidth="3"/>
                      <line x1="0" y1="0" x2="0" y2="30" stroke={cat.color} strokeWidth="3"/>
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Categories;