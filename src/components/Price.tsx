import React from 'react'


function Price(): React.ReactElement {
  const plans = [
    {
      name: 'Aプラン',
      duration: '40分',
      price: '$40',
      icon: '🌊',
      services: [
        '事前カウンセリング',
        '呼吸・巡り・変讐の調整',
        '液りや不調の図へ丁寧なアプローチ'
      ],
      target: '日常の絞れや駆卵を整えたい方'
    },
    {
      name: 'Bプラン',
      duration: '40分',
      price: '$60',
      icon: '🍃',
      services: [
        'Aプランに加えて･･･',
        'ナチュラルオイルで深いし',
        '明成・足ツボも施術、体の葬・心のクセに個別アプローチ'
      ],
      target: '体と心を同時に整えたい方に'
    },
    {
      name: 'Cプラン',
      duration: '60分',
      price: '$80',
      icon: '🍃',
      services: [
        '全砦を丁撃に租整・調整',
        'ナチュラルオイルで深いリセット',
        '調成・足ツボ・体の葬に合わせた個別アプローチ',
        '慢性的な不調や拠を深くケプ',
        '施術に体のサインど改芸アドバイス共有'
      ],
      target: '慢性的な不調や拠を深くケプしたい方'
    },
    {
      name: '施術者限定パーソナルトレーニング',
      duration: '40分',
      price: '$60',
      icon: '🏋️',
      services: [
        '施術をつけた方限定、一田チケント刺',
        '施術で足た体の鋳や生滑祖様に合わせた個別プログラム',
        '日線連成のための来乗亭アドバイス込み',
        '対囲・オンライン・お糸トレ対応'
      ],
      target: '施術を受けた方限定'
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
                <span className="text-3xl md:text-4xl">{plan.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  {plan.name}
                </h3>
              </div>
              <div className="text-right">
                <p className="text-base md:text-lg text-gray-600">{plan.duration}</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-800">{plan.price}</p>
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-4">
              <h4 className="text-sm md:text-base font-semibold text-gray-700 mb-2">
                {index === 0 ? 'この時朗で行うこと' : index === 1 ? '事前カウンセリング込み' : index === 2 ? 'さらに深く整えます･･･' : '含まれるサービス'}
              </h4>
              <ul className="space-y-2">
                {plan.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="text-sm md:text-base text-gray-700 flex items-start">
                    <span className="mr-2">・</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="pt-4 border-t border-amber-300 mb-6 last:mb-0">
              <h4 className="text-sm md:text-base font-semibold text-gray-700 mb-2">
                こんな方に
              </h4>
              <p className="text-sm md:text-base text-gray-700">
                {plan.target}
              </p>
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

