import React from 'react'
import backgroundImage from '../assets/photos/img_background.jpg'

function Background(): React.ReactElement {
  return (
    <section className="w-full bg-gray-100 flex flex-col md:flex-row mt-16">
      {/* Left Section - Image */}
      <div className="w-full md:w-2/5">
        <img 
          src={backgroundImage} 
          alt="実績と背景" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Text Area */}
      <div className="w-full md:w-3/5 bg-gray-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
          実績と背景
        </h2>
        
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            実績
          </h3>
          <div className="text-gray-700 text-base md:text-lg space-y-2">
            <p>ニュージーランドの器清体がどうたら</p>
            <p>ニュージーランドの器清体がどうたら</p>
            <p>ニュージーランドの器清体がどうたら</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            背景
          </h3>
          <div className="text-gray-700 text-base md:text-lg space-y-2">
            <p>ニュージーランドの器清体がどうたら</p>
            <p>ニュージーランドの器清体がどうたら</p>
            <p>ニュージーランドの器清体がどうたら</p>
          </div>
        </div>

        <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 w-fit">
          詳しく見る
        </button>
      </div>
    </section>
  )
}

export default Background

