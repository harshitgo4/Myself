import React from 'react';
import img5 from '../images/undraw_Project_completed_re_jr7u.png';
import RepoCard from './repocard'; // Ensure this matches the export in RepoCard.js

const repos = [
  {
    "url": "https://github.com/harshitgo4/BookExchangeHackathon.git",
    "title": "Book Exchange",
    "skills": ["JavaScript", "HTML", "CSS"],
    "created": "Apr 7, 2023",
    "description": "Front-end of a Book Exchange Platform"
  },
  {
    "url": "https://github.com/harshitgo4/Portfolio",
    "title": "Portfolio",
    "skills": ["React", "ChakraUI", "JavaScript"],
    "created": "Aug 31, 2023",
    "description": "Portfolio About Myself."
  },
  {
    "url": "https://github.com/harshitgo4/Krypto",
    "title": "Krypto",
    "skills": ["React", "ChakraUI", "JavaScript", "HTML", "CSS"],
    "created": "Aug 31, 2023",
    "description": "Provide details of cryptocurrencies and their exchange."
  },
  {
    "url": "https://github.com/harshitgo4/linou",
    "title": "Linou",
    "skills": ["React", "MaterialUI", "JavaScript"],
    "created": "Dec 1, 2023",
    "description": "Landing page of an Activity and Tasks App."
  },
  {
    "url": "https://github.com/harshitgo4/Atlas-",
    "title": "Atlas",
    "skills": ["Python"],
    "created": "Apr 21, 2023",
    "description": "An educational app for children to guess the country name based on hints."
  },
  {
    "url": "https://github.com/harshitgo4/backendEcommerce",
    "title": "Shipkart",
    "skills": ["React", "tailwindcss", "JavaScript", "Redux", "mongoDb", "Nodejs"],
    "created": "Jan 28, 2024",
    "description": "A fully functional Ecommerce Website."
  }
  // Add other repo objects here...
];

const About = () => {
  return (
    <>
      <div>
        <div className="grid sm:gap-8 gap-4 sm:grid-cols-2 p-4 sm:m-8 mb-2">
          <div className="sm:col-span-1 flex justify-center">
            <img src={img5} alt="" className='scale-85' />
          </div>
          <div className="sm:col-span-1 flex flex-col justify-center items-center">
            <div className="text-center mb-4">
              <span className="text-4xl sm:text-8xl font-semibold text-headingcolor font-montserrat shadow-sm mb-4">
                Projects
              </span>
            </div>
            <div className="p-1 text-center">
              <span className="text-lg sm:text text-gray-400 leading-relaxed font-roboto font-semibold">
                My projects make use of a vast variety of the latest technology tools. My best experience is to create web app projects and deploy them using cloud infrastructure.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <span className="text-4xl sm:text-5xl font-semibold text-headingcolor font-montserrat shadow-sm mt-10 w-full text-center">
          Projects
        </span>
      </div>
      <div className='flex flex-wrap justify-center mt-8'>
        {repos.map((repo, index) => (
          <RepoCard key={index} {...repo} />
        ))}
      </div>
    </>
  );
};

export default About;
