import React from 'react'
import topImage from '../assets/photos/img_top.png'

function Top(): React.ReactElement {
  return (
    <section 
      className="relative w-full h-screen flex items-center justify-start px-8 md:px-16 lg:px-24"
      style={{
        backgroundImage: `url(${topImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          NO MOVE NO LIFE（修正する）
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl drop-shadow-md">
          自然と調和した清体
        </p>
      </div>
    </section>
  )
}

export default Top

