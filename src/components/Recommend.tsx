import React from 'react'
import recommendImage from '../assets/photos/img-recommmend.jpg'

function Recommend(): React.ReactElement {
  const recommendations = [
    'とにかく痛みを早く軽くしたい',
    'もっとパフォーマンスを上げたい',
    '古い症状から解放されたい',
    '古い症状を繰り返している'
  ]

  return (
    <div className="flex flex-col md:flex-row mt-32">
          {/* Left Section - Text Area */}
          <div className="w-full md:w-2/5 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
              こんな方におすすめです
            </h2>
            <div className="space-y-4">
              {recommendations.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-gray-50 p-4 rounded-md"
                >
                  <div className="w-4 h-4 bg-gray-800 rounded-sm mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-3/5">
            <img 
              src={recommendImage} 
              alt="おすすめの方" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  )
}

export default Recommend

