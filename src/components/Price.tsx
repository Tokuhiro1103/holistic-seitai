import React from 'react'


function Price(): React.ReactElement {
  const plans = [
    {
      name: 'Aプラン：40分',
      price: '$40',
      services: [
        '事前カウンセリング',
        '呼吸・巡り・姿勢を整えるプロ施術',
        '凝り・不調の原因を丁寧にアプローチ',
        '日常の疲れや緊張を確実にほぐす'
      ],

    },
    {
      name: 'Bプラン：60分',
      price: '$60',
      services: [
        'Aプランに加えて･･･',
        'ナチュラルオイルで深いし',
        '明成・足ツボも施術、体の葬・心のクセに個別アプローチ'
      ],

    },
    {
      name: 'Cプラン：60分',
      price: '$80',
      services: [
        '全砦を丁撃に租整・調整',
        'ナチュラルオイルで深いリセット',
        '調成・足ツボ・体の葬に合わせた個別アプローチ',
        '慢性的な不調や拠を深くケプ',
        '施術に体のサインど改芸アドバイス共有'
      ],

    },
    {
      name: '施術者限定パーソナルトレーニング',
      price: '$60',
      services: [
        '施術をつけた方限定、一田チケント刺',
        '施術で足た体の鋳や生滑祖様に合わせた個別プログラム',
        '日線連成のための来乗亭アドバイス込み',
        '対囲・オンライン・お糸トレ対応'
      ],

    }
  ]

  return (
    <div className="py-16 md:py-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
          施術プラン・料金
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-2">
          Plans & Pricing
        </p>
      </div>

      {/* Plans Card */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 md:p-8">
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
              
              <ul className="space-y-2">
                {plan.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="text-sm md:text-base text-gray-700 flex items-start">
                    <span className="mr-2">・</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
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

