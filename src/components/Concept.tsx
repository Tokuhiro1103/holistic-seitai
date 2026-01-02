import React from 'react'
import { Link } from 'react-router-dom'
import conceptImage from '../assets/photos/img_concept.jpg'

function Concept(): React.ReactElement {
  return (
    <div className="mt-64">
      {/* Heading - Centered at top */}
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
        ホリスティック清体について
      </h3>
      
      {/* Content - Two Column Layout */}
      <div className="flex flex-col md:flex-row mt-16">
        {/* Left Section - Text Area */}
        <div className="w-full md:w-2/5 pr-8 md:pr-12 lg:pr-16 flex flex-col justify-center">
          <div className="text-gray-700 text-base md:text-lg mb-8 space-y-3">
            <p>人の健康とは、
            ただ病気がないことでも、痛みが取れることだけでもないと、僕は考えています。</p>
            <p>体、心、感覚、そしてその人自身の在り方。
それらが調和し、自然にエネルギーが巡っている状態。
それが「健やかさ」だと思っています。</p>
            <p>現代は便利で情報も多い一方で、
知らず知らずのうちに、自分の体や心の声から離れてしまいやすい時代です。
不調があっても、「忙しいから」「仕方ないから」と後回しにしてしまう。
でも体は、ちゃんとサインを出し続けています。</p>
<p>僕の整体「ホリスティック清体」は、
そのサインにもう一度気づくための時間です。</p>
          </div>
          {/* <Link
            to="/about"
            className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 w-fit"
          >
            詳しく見る
          </Link> */}
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

