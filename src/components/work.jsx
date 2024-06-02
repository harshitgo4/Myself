import React from 'react'
import { SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import img4 from '../images/undraw_project_complete_lwss.png'
import FAQ from './accordian';
const Work = () => {
  return (
    <div>
      <div className="grid sm:gap-4 gap-2 sm:grid-cols-2 p-4 sm:m-8 mb-2">
        <div className="sm:col-span-1 flex justify-center">
          <img src={img4} alt="" className=' scale-85' />
        </div>
        <div className="sm:col-span-1 flex flex-col justify-center items-center">
          <div className="text-center mb-2">
            <span className="text-5xl sm:text-8xl font-semibold text-headingcolor font-roboto shadow-sm">
              Work
            </span>
          </div>
          <div className="p-1 text-center">
            <span className="text-lg sm:text-3xl text-gray-700 leading-relaxed font-roboto font-semibold">
             Experience and Particpation
            </span>
          </div>
        
        </div>
      </div>
    <FAQ>
      
    </FAQ>
    </div>
  )
}

export default Work
