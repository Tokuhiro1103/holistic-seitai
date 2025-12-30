import React from 'react'
import { Link } from 'react-router-dom'
import conceptImage from '../assets/photos/img_concept.jpg'

function Concept(): React.ReactElement {
  return (
    <section className="w-full bg-gray-100 flex flex-col md:flex-row mt-16">
      {/* Left Section - Text Area */}
      <div className="w-full md:w-2/5 bg-gray-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          自然と調和した整体を目指して
        </h2>
        <div className="text-gray-700 text-base md:text-lg mb-8 space-y-3">
          <p>ニュージーランドの器清体がどうたら</p>
          <p>ニュージーランドの器清体がどうたら</p>
          <p>ニュージーランドの器清体がどうたら</p>
        </div>
        <Link
          to="/about"
          className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 w-fit"
        >
          詳しく見る
        </Link>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-3/5">
        <img 
          src={conceptImage} 
          alt="自然と調和した整体" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

export default Concept

