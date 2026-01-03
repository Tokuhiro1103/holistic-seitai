import React from 'react'


function Price(): React.ReactElement {
  const plans = [
    {
      name: 'Aプラン：40分',
      price: '$40',
      services: [
        '事前カウンセリング込み。',
        '呼吸・巡り・姿勢を整えるプロ施術で凝りや不調の原因を丁寧にアプローチし、日常の疲れや緊張を確実にほぐしていきます。'
      ],

    },
    {
      name: 'Bプラン：60分',
      price: '$60',
      services: [
        '事前カウンセリング込み',
        'Aプランの施術に加えてナチュラルオイルで深い癒しを与えます。',
        'さらに頭皮や足ツボも施術し、体と心のクセに個別でアプローチします。'
      ],

    },
    {
      name: 'Cプラン：60分',
      price: '$80',
      services: [
        '事前カウンセリング込み',
        '全身を丁寧に観察、調整してナチュラルオイルで深いリセットを行います。',
        'さらに頭皮・足ツボ・体の癖に合わせた個別アプローチを行い、施術後に体のサインと改善のアドバイスを共有します。',
      ],

    },
    {
      name: '施術者限定パーソナルトレーニング：40分',
      price: '$60',
      services: [
        '施術を受けた方限定の一回チケット制です。',
        '施術で発見した体の癖や生活習慣に合わせた個別プログラムを作成します。',
        '目標達成ののための栄養学アドバイス込み。',
        '対囲・オンライン・お家トレにも対応しています。'
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

