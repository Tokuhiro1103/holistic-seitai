import React from 'react'
import { useTranslation } from 'react-i18next'

function Question(): React.ReactElement {
  const { t } = useTranslation()
  
  const faqs = [
    {
      question: t('question.faqs.faq1.question'),
      answer: t('question.faqs.faq1.answer')
    },
    {
      question: t('question.faqs.faq2.question'),
      answer: t('question.faqs.faq2.answer')
    },
    {
      question: t('question.faqs.faq3.question'),
      answer: t('question.faqs.faq3.answer')
    },
    {
      question: t('question.faqs.faq4.question'),
      answer: t('question.faqs.faq4.answer')
    },
    {
      question: t('question.faqs.faq5.question'),
      answer: t('question.faqs.faq5.answer')
    },
    {
      question: t('question.faqs.faq6.question'),
      answer: t('question.faqs.faq6.answer')
    },
    {
      question: t('question.faqs.faq7.question'),
      answer: t('question.faqs.faq7.answer')
    }
  ]

  return (
    <div className="mt-16 mb-16 md:mt-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          {t('question.title')}
        </h2>
        <div className="flex items-center justify-center my-4">
          <svg 
            className="w-32 md:w-48 h-4 text-amber-300" 
            viewBox="0 0 200 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 10 Q 50 5, 90 10 T 170 10" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M10 10 Q 50 15, 90 10 T 170 10" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
        </div>
        <p className="text-lg md:text-xl text-gray-600 mt-2">
          {t('question.subtitle')}
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-amber-50 border border-amber-200 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
            
              
              {/* Question and Answer */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                  Q{index + 1}. {faq.question}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* プライバシーについて */}
      <div className="mt-16 mb-16">
        {/* Title Section */}
        

        {/* Content Card */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
            {t('question.privacy.title')}
          </h3>
          <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-4">
            <p>{t('question.privacy.text1')}</p>
            <p>{t('question.privacy.text2')}</p>
            <p>{t('question.privacy.text3')}</p>
            <p>{t('question.privacy.text4')}</p>
            <p>{t('question.privacy.text5')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question

