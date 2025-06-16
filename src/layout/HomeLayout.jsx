import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../pages/Loading';

const HomeLayout = () => {
  const {state} = useNavigation();
  return (
    <div>
      <header><Navbar></Navbar> </header>
     <main> {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>   } </main>
     <footer><Footer></Footer></footer>
    </div>
  );
};

export default HomeLayout;