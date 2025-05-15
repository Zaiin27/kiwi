import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    }, [pathname]);
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default Layout;