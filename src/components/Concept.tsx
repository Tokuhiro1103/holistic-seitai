import React from 'react'
import { useTranslation } from 'react-i18next'
import conceptImage from '../assets/photos/img_concept.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Concept(): React.ReactElement {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="mt-32">
      {/* Heading - Centered at top */}
      <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center">
        {t('concept.title')}
      </h3>
      
      {/* Content - Two Column Layout */}
      <div className="flex flex-col md:flex-row mt-8">
        {/* Left Section - Text Area */}
        <div className="w-full md:w-1/2 md:pr-12 lg:pr-16 flex flex-col justify-center">
          <div className="text-gray-700 text-base md:text-lg mb-8 space-y-3 text-left">
            <p dangerouslySetInnerHTML={{ __html: t('concept.text1').replace(/\n/g, '<br />') }}></p>
            <p>{t('concept.text2')}</p>
          </div>
          {/* <Link
            to="/about"
            className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 w-fit"
          >
            詳しく見る
          </Link> */}
        </div>

        {/* Right Section - Image */}
        <div 
          ref={ref}
          className={`w-full md:w-1/2 aspect-[550/270] fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <img 
            src={conceptImage} 
            alt="自然と調和した整体" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Concept

