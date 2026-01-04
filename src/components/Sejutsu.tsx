import React from 'react'
import { useTranslation } from 'react-i18next'
import sejutsuImage from '../assets/photos/img-sejutsu.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Sejutsu(): React.ReactElement {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="mt-16">
      {/* Heading - Centered at top */}
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center">
        {t('sejutsu.title')}
      </h2>
      
      {/* Content - Two Column Layout */}
      <div className="flex flex-col md:flex-row mt-8">
        {/* Left Section - Image */}
        <div 
          ref={ref}
          className={`w-full md:w-1/2 aspect-[550/270] order-2 md:order-1 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <img 
            src={sejutsuImage} 
            alt={t('sejutsu.title')} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Section - Text Area */}
        <div className="w-full md:w-1/2 md:pl-12 lg:pl-16 flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="text-gray-700 text-base md:text-lg space-y-4 text-left">
            <p dangerouslySetInnerHTML={{ __html: t('sejutsu.text').replace(/\n/g, '<br />') }}></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sejutsu

