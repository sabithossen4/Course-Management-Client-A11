import React from 'react';
import Courses from '../components/Courses';
import PopularCourses from '../components/PopularCourses';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';


const Home = () => {
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
      <div>
        <PopularCourses></PopularCourses>
      </div>
      <div>
        <Testimonials/>
      </div>
      
      
    </div>
  );
};

export default Home;