import React from 'react';
import { SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import img3 from '../images/undraw_Graduation_re_gthn.png';
import data from '../data';

const Education = () => {
  return (
    <>
      <div className="grid sm:gap-4 gap-2 sm:grid-cols-2 p-6 sm:m-8 mb-2">
        <div className="sm:col-span-1 flex justify-center">
          <img src={img3} alt="" />
        </div>
        <div className="sm:col-span-1 flex flex-col justify-center items-center">
          <div className="text-center mb-2">
            <span className="text-5xl sm:text-7xl font-semibold text-headingcolor font-roboto shadow-sm">
              Education
            </span>
          </div>
          <div className="p-1 text-center">
            <span className="text-lg sm:text-3xl text-gray-700 leading-relaxed font-roboto font-semibold">
              Basic Qualification and Certifications
            </span>
          </div>
          <div className="flex justify-center mt-8 mb-8">
            <SiLeetcode className="text-orange-600 text-4xl sm:text-5xl mr-4 sm:mr-8" />
            <SiHackerrank className="text-green-500 text-4xl sm:text-5xl mr-4 sm:mr-8" />
            <SiCodechef className="text-gray-900 text-4xl sm:text-5xl mr-4 sm:mr-8" />
            <SiGeeksforgeeks className="text-green-600 text-4xl sm:text-5xl mr-4 sm:mr-8" />
          </div>
        </div>
      </div>

      <div className="text-center mt-10 mb-6">
        <h2 className="text-3xl sm:text-5xl font-semibold text-headingcolor font-mono">
          Degree
        </h2>
      </div>

      <div className="sm:grid sm:grid-cols-12 min-h-[40vh] rounded-lg shadow-md p-6">
        <div className="col-span-4 flex justify-center m-4">
          <img src="https://upload.wikimedia.org/wikipedia/en/f/f2/Jabalpur_Engineering_College_%28JEC%29%27s_logo.png" alt="" className="w-64 h-auto rounded-lg object-contain self-center" />
        </div>
        <div className="col-span-8 flex flex-col justify-center">
          <div className="text-headingcolor flex justify-between mb-4">
            <span className="text-xl sm:text-2xl">
              Jabalpur Engineering College
            </span>
            <span className="text-xl sm:text-2xl">
              2021-2025
            </span>
          </div>
          <div className="text-lg sm:text-xl text-gray-700 leading-relaxed font-roboto font-bold mb-3">
            Computer Science and Engineering
          </div>
          <div>
            <span className="block text-lg mb-4">
              <span className="text-2xl mr-2">🌟</span> Participated in Google Cloud workshops and hackathons, gaining hands-on experience in cloud computing technologies.
            </span>
            <span className="block text-lg mb-4">
              <span className="text-2xl mr-2">📚</span> Studied essential software engineering subjects like Data Structures, Algorithms, Database Management Systems, and Artificial Intelligence.
            </span>
            <span className="block text-lg mb-4">
              <span className="text-2xl mr-2">💻</span> Completed additional courses in Deep Learning, Data Science, and Full Stack Development to broaden skill set.
            </span>
          
          </div>
        </div>
      </div>

      <div className="text-center mt-10 mb-6">
        <h2 className="text-3xl sm:text-5xl font-semibold text-headingcolor font-mono">
          Certifications
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 p-6">
        {data.map((cer, index) => (
          <a
            key={index}
            href={cer.URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg shadow-lg hover:bg-white transition duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <img src={cer.ImgURL} alt={cer.Title} className="w-16 h-16 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{cer.Title}</h3>
                <p className="text-gray-600">{cer.Institute}</p>
              </div>
            </div>
            <p className="text-gray-700">{cer.Heading}</p>
            {cer.Issued && <p className="text-gray-500 mt-2 font-semibold">Issued: {cer.Issued}</p>}
            {cer.Skills && <p className="text-gray-500 mt-2 font-bold">Skills: {cer.Skills}</p>}
          </a>
        ))}
      </div>
    </>
  );
};

export default Education;
