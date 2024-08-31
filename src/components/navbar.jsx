import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const text = "<HarshitGoyal/>";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="  bg-green-200 shadow-md sticky top-0 z-50 px-4  scroll-smooth">
      <div className="flex justify-between items-center">
        <div className="heading text-gray-800 hover:text-gray-900 h-auto w-auto">
          <NavLink to="/" className="btn block lg:inline-block  font-signature  h-10  w-full  text-2xl">
            {text}
          </NavLink>
        </div>
        <div className="hidden lg:flex space-x-4">
          <NavLink to="/" className="btn" activeClassName="active-link">Home</NavLink>
          <NavLink to="/education" className="btn" activeClassName="active-link">Education</NavLink>
          <NavLink to="/work" className="btn" activeClassName="active-link">Work</NavLink>
          <NavLink to="/projects" className="btn" activeClassName="active-link">Projects</NavLink>
          <a href='https://drive.google.com/file/d/1IjT0hEtv5Ed7zaePxaP0hN1iz_GYsXbk/view?usp=drive_link' target='_' className="btn" >Resume</a>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 lg:hidden">
          <NavLink to="/" className="btn block mt-2" onClick={toggleMenu} activeClassName="active-link">Home</NavLink>
          <NavLink to="/education" className="btn block mt-2"onClick={toggleMenu} activeClassName="active-link">Education</NavLink>
          <NavLink to="/work" className="btn block mt-2"onClick={toggleMenu} activeClassName="active-link">Work</NavLink>
          <NavLink to="/projects" className="btn block mt-2 " onClick={toggleMenu} activeClassName="active-link">Projects</NavLink>
          <div className='w-full'>
          <a href='https://drive.google.com/file/d/1YN2LXILAqt2cjM4GJqlBbYjtcwt9oD6g/view' target='_' className="btn mb-2 w-full block" onClick={toggleMenu} >Resume</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
