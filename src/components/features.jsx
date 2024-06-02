import React from 'react';

const Features = ({ onClose }) => {
  return (
    <div className="lg:hidden">
      <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-800 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div className="flex flex-col items-start">
        <a href="/about" className="btn mt-2">About</a>
        <a href="/education" className="btn mt-2">Education</a>
        <a href="/work" className="btn mt-2">Work</a>
        <a href="/projects" className="btn mt-2">Projects</a>
        <a href="/experience" className="btn mt-2">Experience</a>
      </div>
    </div>
  );
};

export default Features;
