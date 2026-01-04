import React from 'react'
import { useTranslation } from 'react-i18next'
import recommendImage from '../assets/photos/img-recommmend.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Why(): React.ReactElement {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="mt-16">
      {/* Heading - Centered at top */}
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
        {t('why.title')}
      </h2>
      
      {/* Content - Two Column Layout */}
      <div className="flex flex-col md:flex-row mt-8">
        {/* Left Section - Text Area */}
        <div className="w-full md:w-1/2 md:pr-12 lg:pr-16 flex flex-col justify-center">
          <div className="text-gray-700 text-base md:text-lg mb-8 space-y-3 text-left">
            <p dangerouslySetInnerHTML={{ __html: t('why.text').replace(/\n/g, '<br />') }}></p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div 
          ref={ref}
          className={`w-3/5 mx-auto md:w-1/2 md:mx-0 aspect-[550/270] fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <img 
            src={recommendImage} 
            alt={t('why.title')} 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Why

