import React from 'react'
import { useTranslation } from 'react-i18next'

function Review(): React.ReactElement {
  const { t } = useTranslation()
  
  const reviews = [
    {
      name: t('review.reviews.review1.name'),
      gender: t('review.reviews.review1.gender'),
      text: t('review.reviews.review1.text')
    },
    {
      name: t('review.reviews.review2.name'),
      gender: t('review.reviews.review2.gender'),
      text: t('review.reviews.review2.text')
    },
    {
      name: t('review.reviews.review3.name'),
      gender: t('review.reviews.review3.gender'),
      text: t('review.reviews.review3.text')
    },
    {
      name: t('review.reviews.review4.name'),
      gender: t('review.reviews.review4.gender'),
      text: t('review.reviews.review4.text')
    },
    {
      name: t('review.reviews.review5.name'),
      gender: t('review.reviews.review5.gender'),
      text: t('review.reviews.review5.text')
    },
    {
      name: t('review.reviews.review6.name'),
      gender: t('review.reviews.review6.gender'),
      text: t('review.reviews.review6.text')
    }
  ]

  return (
    <div className="mt-16 mb-16 md:mt-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          {t('review.title')}
        </h2>
        
        
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 relative flex flex-col"
          >
            {/* Large Quote Mark */}
            <div className="absolute top-4 left-4 text-gray-300 text-6xl md:text-7xl font-serif leading-none select-none">
              "
            </div>
            
            {/* Review Content */}
            <div className="pl-8 flex flex-col flex-1">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 flex-1">
                {review.text}
              </p>
              <p className="text-sm text-gray-600 font-medium mt-auto">
                {review.name}（{review.gender}）
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review

