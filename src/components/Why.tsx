import React from 'react'
import recommendImage from '../assets/photos/img-recommmend.jpg'

function Why(): React.ReactElement {
  return (
    <div className="mt-16">
      {/* Heading - Centered at top */}
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
        なぜこの整体をしているのか
      </h2>
      
      {/* Content - Two Column Layout */}
      <div className="flex flex-col md:flex-row mt-8">
        {/* Left Section - Text Area */}
        <div className="w-full md:w-1/2 md:pr-12 lg:pr-16 flex flex-col justify-center">
          <div className="text-gray-700 text-base md:text-lg mb-8 space-y-3 text-left">
            <p>幼い頃から身近な人の病気や不調を多く見てきました。
「もっと元気に楽しく生きられたらいいのに」
その想いが僕の原点です。<br />
オーストラリアで人体や運動を学び、
多くの人の体を見てきた中で強く感じたのは、
同じ施術や運動でも効果は人それぞれだということでした。<br />
体の状態だけでなく、
生活や考え方、心のクセが結果に大きく影響している。<br />
この経験が今の施術スタイルにつながっています。<br />
僕の役割は治すことではなく、
気づくきっかけをつくることです。<br />
そこからどう整えていくかはその人自身。
自分の体と心に向き合う、その一歩をサポートしています。</p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-3/5 mx-auto md:w-1/2 md:mx-0 aspect-[550/270]">
          <img 
            src={recommendImage} 
            alt="なぜこの整体をしているのか" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Why

