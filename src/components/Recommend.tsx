import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Recommend(): React.ReactElement {
  const { t } = useTranslation()
  const recommendations = [
    t('recommend.items.item1'),
    t('recommend.items.item2'),
    t('recommend.items.item3'),
    t('recommend.items.item4'),
    t('recommend.items.item5')
  ]

  return (
    <div className="mt-32 flex justify-center">
      {/* Card Container */}
      <div className="w-full max-w-3xl bg-amber-50 border border-amber-200 p-8 md:p-12 lg:p-16">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            {t('recommend.title')}
          </h2>
          <div className="flex items-center justify-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          
        </div>

        {/* List Section */}
        <div className="space-y-3 mt-8">
          {recommendations.map((item, index) => (
            <div 
              key={index}
              className="flex items-start"
            >
              
              <p className="text-gray-700 text-base md:text-lg flex-1">{item}</p>
            </div>
          ))}
        </div>

        {/* Button Section */}
        <div className="mt-8 text-center">
          <Link
            to="/price"
            className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
          >
            {t('recommend.button')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Recommend

