import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import logonavbar from '../assets/logo/navbar/logo_navbar.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About Us', path: '/AboutUs' },
    { id: 3, name: 'Service', path: '/Service' },
    { id: 4, name: 'Portfolio', path: '/Portfolio' }
  ];

  const toggleNavBar = () => setOpen(!open);
  const closeNavBar = () => setOpen(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div
      id="navbar"
      className={`w-full h-[8ch] backdrop-blur-sm flex items-center justify-between md:px-16 sm:px-10 
        px-4 fixed top-0 transition-all ease-in-out duration-300 z-50 border-b border-neutral-200 ${
          isScrolled ? 'bg-sky-50/30 border-sky-200' : 'bg-neutral-50'
        }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 md:pr-16 pr-0">
        <Link to="/">
          <img src={logonavbar} className="h-8 w-auto" />
        </Link>
      </div>

      {/* Hamburger menu */}
      <div className="md:hidden">
        <button onClick={toggleNavBar} className="text-neutral-600 focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      {/* Navbar items and button */}
      <div
        className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto
          bg-neutral-50 border-1 md:border-none border-neutral-300 md:bg-transparent shadow-lg md:shadow-none
          transition-all ease-in-out duration-300 transform ${
            open ? 'translate-x-0' : 'translate-x-full'
          } md:translate-x-0 z-60`}
      >
        {/* Mobile header: logo & close icon */}
        <div className="w-full md:hidden flex items-center justify-between p-4">
          <Link to="/">
            <img src={logonavbar} className="h-8 w-auto" />
          </Link>
          <button onClick={closeNavBar} className="text-red-500 focus:outline-none">
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Divider */}
        <div className="border-b border-neutral-300 md:hidden"></div>

        {/* Nav Items + Button */}
        <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-0 h-auto">
          {/* Navbar items */}
          <ul className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-4 md:gap-7 text-neutral-400 md:text-base text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.id} onClick={closeNavBar}>
                <Link
                  to={item.path}
                  className={`hover:text-blue-500 transition duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-500 font-semibold'
                      : 'text-neutral-400'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Us button */}

          <div className="mt-auto md:mt-0 flex justify-start md:justify-center">
          <Link to="/contact">
            <button className="w-fit px-6 py-2 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-2xl md:text-base text-2xl transition duration-300 ease-in-out cursor-pointer">
              Contact Us
            </button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
