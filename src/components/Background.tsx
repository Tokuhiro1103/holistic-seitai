import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import profileImage from '../assets/photos/img_about1.jpg'

function Background(): React.ReactElement {
  const { t } = useTranslation()

  return (
    <div className="mt-16">
      {/* Heading - Centered at top */}
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center">
        {t('background.title')}
      </h2>
      
      {/* Content - Two Column Layout */}
      <div className="flex flex-col md:flex-row mt-8">
        {/* Left Section - Image */}
        <div className="w-3/5 mx-auto md:w-1/2 md:mx-0 aspect-[550/270] flex items-center justify-center">
          <img 
            src={profileImage} 
            alt={t('background.title')} 
            className="max-w-full max-h-full object-contain shadow-md block"
          />
        </div>

        {/* Right Section - Text Area */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {t('background.name')}
          </h3>
          <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
            {t('background.description')}
          </p>
          <Link
            to="/about"
            className="text-gray-800 text-base md:text-lg font-medium hover:text-gray-600 transition-colors duration-200 w-fit flex items-center gap-2"
          >
            <span className="text-blue-500">→</span>
            <span className="text-blue-500">{t('background.link')}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Background

