import React from 'react';
import { FaReact, FaPython, FaCss3Alt, FaJs, FaNodeJs, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiPandas, SiJupyter, SiMongodb, SiFirebase, SiMysql, SiKotlin, SiTensorflow, SiChakraui, SiRedux, SiTailwindcss,  } from 'react-icons/si';

const techIcons = {
  JavaScript: <FaJs />,
  React: <FaReact />,
  CSS: <FaCss3Alt />,
  Python: <FaPython />,
  Pandas: <SiPandas />,
  "Jupyter Notebook": <SiJupyter />,
  Nodejs: <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  MySQL: <SiMysql />,
  Kotlin: <SiKotlin />,
  TensorFlow: <SiTensorflow />,
  PHP: <FaPhp />,
  Laravel: <FaLaravel />,
  ChakraUI: <SiChakraui />,
  Redux: <SiRedux />,
  tailwindcss: <SiTailwindcss />,

  HTML: <i className="fab fa-html5"></i>,  // Optional custom HTML icon
};

const RepoCard = ({ url, title, skills, created, description }) => {
  return (
    <div 
      className=" shadow-md rounded-md p-6 m-4 max-w-md w-full flex flex-col items-center transition-all transform hover:-translate-y-2 hover:shadow-lg hover:bg-green-100 cursor-pointer bg-blue-200"
      onClick={() => window.open(url, "_blank")}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 text-center">{description}</p>
      <div className="flex flex-wrap justify-center mb-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center m-1 text-lg">
            {techIcons[skill]}
            <span className="ml-1">{skill}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-800 mb-2"><strong>Created:</strong> {created}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        View Repo
      </a>
    </div>
  );
};

export default RepoCard;
