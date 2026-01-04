import React from 'react'
import { useTranslation } from 'react-i18next'

function Price(): React.ReactElement {
  const { t } = useTranslation()
  
  const plans = [
    {
      name: t('price.plans.planA.name'),
      price: '$40',
      services: [
        t('price.plans.planA.services.service1'),
        t('price.plans.planA.services.service2')
      ],
    },
    {
      name: t('price.plans.planB.name'),
      price: '$60',
      services: [
        t('price.plans.planB.services.service1'),
        t('price.plans.planB.services.service2'),
        t('price.plans.planB.services.service3')
      ],
    },
    {
      name: t('price.plans.planC.name'),
      price: '$80',
      services: [
        t('price.plans.planC.services.service1'),
        t('price.plans.planC.services.service2'),
        t('price.plans.planC.services.service3')
      ],
    },
    {
      name: t('price.plans.planPT.name'),
      price: '$60',
      services: [
        t('price.plans.planPT.services.service1'),
        t('price.plans.planPT.services.service2'),
        t('price.plans.planPT.services.service3'),
        t('price.plans.planPT.services.service4')
      ],
    }
  ]

  return (
    <div className="py-16 md:py-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          {t('price.title')}
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
          {t('price.subtitle')}
        </p>
      </div>

      {/* Plans Card */}
      <div className="bg-amber-50 border border-amber-200 p-6 md:p-8">
        {plans.map((plan, index) => (
          <div key={index}>
            {/* Plan Header */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-amber-300">
              <div className="flex items-center gap-4">
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  {plan.name}
                </h3>
              </div>
              <div className="text-right">
                
                <p className="text-2xl md:text-3xl font-bold text-gray-800">{plan.price}</p>
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-4">
              <div className="text-sm md:text-base text-gray-700 space-y-2">
                {plan.services.map((service, serviceIndex) => (
                  <p key={serviceIndex}>{service}</p>
                ))}
              </div>
            </div>



            {/* Divider between plans (except for last one) */}
            {index < plans.length - 1 && (
              <div className="border-t-2 border-amber-300 my-8"></div>
            )}
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default Price

