import React, { useEffect } from 'react';
import Courses from '../components/Courses';
import PopularCourses from '../components/PopularCourses';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import FAQPage from '../components/FAQPage';
import About from '../components/About';
import { useLocation } from 'react-router';


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView(); 
      }
    }
  }, [location]);
  return (
    <div>
      <title>Course Hub</title>
      <div >
        <HeroSection/>
      </div>      
      <div >
        <Categories/>
      </div>      
      <div >
        <Courses></Courses>
      </div>
      <div id="about">
        <About/>
      </div>
      <div>
        <PopularCourses></PopularCourses>
      </div>
      <div>
        <Testimonials/>
      </div>
      <div>
        <FAQPage/>
      </div>
      
      
    </div>
  );
};

export default Home;