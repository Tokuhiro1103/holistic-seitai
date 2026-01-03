import React from 'react'
import sejutsuImage from '../assets/photos/img-sejutsu.jpg'

function Sejutsu(): React.ReactElement {
  return (
    <div className="mt-16">
      {/* Heading - Centered at top */}
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center">
        施術内容
      </h2>
      
      {/* Content - Two Column Layout */}
      <div className="flex flex-col md:flex-row mt-8">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 aspect-[550/270] order-2 md:order-1">
          <img 
            src={sejutsuImage} 
            alt="ホリスティック清体について" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Section - Text Area */}
        <div className="w-full md:w-1/2 pl-8 md:pl-12 lg:pl-16 flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="text-gray-700 text-base md:text-lg space-y-4">
            <p>ホリスティック清体は、
体の歪み・硬さ・呼吸・巡りを丁寧に観察しながら
その人の体と心の癖に合わせて整えていく施術です。
強く揉んだりバキバキ鳴らしたりはしません。
必要な場所に必要な分だけ触れ、即効性よりも「自分の状態に気づくこと」を大切にしています。
施術を受けた方からは
「呼吸が深くなった」
「体だけでなく気持ちも軽くなった」
「眠りの質が変わった」
そんな声をよくいただきます。
体と心は切り離せません。
どちらかが疲れるともう片方にも必ず影響が出ます。
だからこそ、部分ではなく“全体”を整える視点を大切にしています。</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sejutsu

