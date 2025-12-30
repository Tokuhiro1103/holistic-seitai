import React from 'react'
import sejutsuImage from '../assets/photos/img-sejutsu.jpg'

function Sejutsu(): React.ReactElement {
  return (
    <section className="w-full bg-gray-100 flex flex-col md:flex-row mt-16">
      {/* Left Section - Image */}
      <div className="w-full md:w-3/5">
        <img 
          src={sejutsuImage} 
          alt="施術内容" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Text Area */}
      <div className="w-full md:w-2/5 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
          施術内容
        </h2>
        <div className="text-gray-700 text-base md:text-lg space-y-4">
          <p>ニュージーランドの器清体がどうたら</p>
          <p>ニュージーランドの器清体がどうたら</p>
          <p>ニュージーランドの器清体がどうたら</p>
        </div>
      </div>
    </section>
  )
}

export default Sejutsu

