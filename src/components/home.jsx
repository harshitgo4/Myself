import React from 'react';
import { FaNpm, FaGit, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss,SiJavascript, SiNodedotjs, SiReact } from 'react-icons/si';
import { SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

import img from '../images/undraw_website_u6x8 (1).png'
import img2 from '../images/undraw_Process_re_gws7.png'

const Home = () => {
  return (
    <>
       <div className='grid sm:gap-4 gap-8 sm:grid-cols-2 p-6 sm:m-8 mb-2'>
        <div className='col-span-1'>
          <h2 className='text-7xl font-bold text-gray-800 text-center font-montserrat shadow-sm mb-4'>Harshit Goyal</h2>
          <h4 className='text-4xl text-blue-600 mb-4 font-normal font-montserrat underline'>(lizzler)</h4>
          <span className='sm:text-3xl text-lg text-gray-700 leading-relaxed font-roboto font-semibold'>
            A passionate individual who always thrives to work on end-to-end products that develop sustainable and scalable social and technical systems to create impact.
          </span>

          <div className='grid sm:grid-cols-10 grid-cols-5 gap-2 mt-4'>
            <a href="https://www.instagram.com/harshit.goyal04/" target='_' className='transform transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram Icon" className='h-10 w-10 rounded-full' />
            </a>
            <a href="https://www.linkedin.com/in/harshit-goyal04/" target='_' className='transform transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn Icon" className='h-10 w-10 rounded-full' />
            </a>
            <a href="https://x.com/Harshit15539954"target='_'  className='transform transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
              <img src="https://assets-global.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png" alt="X Icon" className='h-10 w-10 rounded-full' />
            </a>
            <a href="https://github.com/harshitgo4?tab=repositories" target='_' className='transform transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
              <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="GitHub Icon" className='h-10 w-10 rounded-full' />
            </a>
            <a href="https://leetcode.com/u/lizzler/"  target='_' className='transform transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
              <img src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" alt="LinkedIn Icon" className='h-10 w-10 rounded-full' />
            </a>
          </div>
        </div>
        <div className='col-span-1'>
          <img src="https://static.vecteezy.com/system/resources/previews/015/155/170/non_2x/male-developer-concept-illustration-business-character-and-web-development-professional-programmer-and-application-engineer-software-develop-and-workplace-network-optimization-code-vector.jpg" alt="" className='h-auto w-full mb-4' />
        </div>
      </div>
        <div>
          <h1 className='text-7xl font-bold text-gray-800 text-center font-roboto mt-4'>What I Do</h1>
        </div>
      <div className='grid sm:gap-4 gap-8 sm:grid-cols-2 p-6 sm:m-8 mb-2' >
          <div>
            <span className='text-4xl font-semibold text-headingcolor font-roboto shadow-sm mt-4 text-center '>
              Full Stack Development
            </span >
            <p className="sm:text-2xl text-lg text-gray-500 leading-relaxed font-roboto font-semibold mt-8 mb-4">
              I specialize in building full stack applications, utilizing technologies such as React.js, Node.js, Express.js, and MongoDB.
            </p>
            < div className="flex  justify-start mt-8 mb-8">
              <FaNpm className="text-red-600 text-5xl mr-4" />
              <FaGit className="text-gray-900 text-5xl mr-4" />
              <SiTailwindcss className="text-blue-500 text-5xl mr-4" />
              <FaNodeJs className="text-green-500 text-5xl mr-4" />
              <FaDatabase className="text-green-500 text-5xl mr-4" />
              <SiJavascript className=" bg-yellow-400 text-5xl"></SiJavascript>
            </div>
      <div className="flex items-center mb-4">
        <p className="mb-6 text-xl text-black leading-relaxed  font-semibold">
        💻
 Specializing in frontend development with React. Skilled in building responsive and user-friendly interfaces for web applications.
        </p>
      </div>
      <div className="flex items-center mb-4">
        <p className="mb-6 text-xl text-black leading-relaxed font-semibold">
        ⚡ Experienced in backend development with Node.js and Express.js. Proficient in building APIs and handling data storage and retrieval.
        </p>
      </div>

          </div>
          <div className='grid-cols-1 m-4'>
            <img src={img} alt="" />
          </div>
        </div>
        <div className='grid sm:gap-4 gap-8 sm:grid-cols-2 p-6 sm:m-8 mb-2' >
          <div className='grid-cols-1 m-4'>
            <img src={img2} alt="" />
          </div>
          <div>
            <span className='text-4xl  font-semibold text-headingcolor font-roboto shadow-sm mt-4 text-center '>
              Data Strucrues and Algorithms 
            </span >
            <p className="sm:text-2xl text-lg text-gray-500 leading-relaxed font-roboto font-semibold mt-8 mb-4">
            I excel in designing and implementing efficient data structures and algorithms, utilizing techniques such as dynamic programming, graph theory, sorting and searching algorithms, and advanced data structures like heaps and hash tables.
            </p>
            <div className="flex justify-start mt-8 mb-8">
  <SiLeetcode className="text-orange-600 text-5xl mr-8" />
  <SiHackerrank className="text-green-500 text-5xl mr-8" />
  <SiCodechef className="text-gray-900 text-5xl mr-8" />
  <SiGeeksforgeeks className="text-green-600 text-5xl mr-8" />
</div>

      <div className="flex items-center mb-4">
        <p className="mb-6 text-xl text-black leading-relaxed  font-semibold">
        🧠 Expert in Data Structures and Algorithms. Proficient in solving complex problems using advanced techniques such as dynamic programming, graph algorithms, and efficient sorting and searching methods.
        </p>
      </div>
      <div className="flex items-center mb-4">
        <p className="mb-6 text-xl text-black leading-relaxed font-semibold">
        🔍 Skilled in optimizing code for performance and efficiency. Adept at implementing and utilizing data structures like arrays, linked lists, trees, heaps, and hash tables to achieve optimal solutions.
        </p>
      </div>

          </div>
        </div>
    </>
  );
}

export default Home;
