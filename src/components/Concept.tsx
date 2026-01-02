import React from 'react'
import { Link } from 'react-router-dom'
import conceptImage from '../assets/photos/img_concept.jpg'

function Concept(): React.ReactElement {
  return (
    <div className="mt-64">
      {/* Heading - Centered at top */}
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
        自己紹介とコンセプト<br />
      </h3>
      
      {/* Content - Two Column Layout */}
      <div className="flex flex-col md:flex-row mt-16">
        {/* Left Section - Text Area */}
        <div className="w-full md:w-2/5 bg-gray-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="text-gray-700 text-base md:text-lg mb-8 space-y-3">
            <p>自己紹介的な文章</p>
            <p>自己紹介的な文章</p>
            <p>活動のコンセプト的な文章</p>
          </div>
          <Link
            to="/about"
            className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 w-fit"
          >
            詳しく見る
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="w-[550px] h-[270px]">
          <img 
            src={conceptImage} 
            alt="自然と調和した整体" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Concept

