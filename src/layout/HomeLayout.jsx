import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../pages/Loading';

const HomeLayout = () => {
  const {state} = useNavigation();
  return (
    <div className='max-w-11/12 m-auto'>
      <header><Navbar></Navbar> </header>
     <main className='min-h-[calc(100vh-425px)]'> {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>   } </main>
     <footer><Footer></Footer></footer>
    </div>
  );
};

export default HomeLayout;