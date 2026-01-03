import React from 'react'

function Question(): React.ReactElement {
  const faqs = [
    {
      question: '施術はどこで受けられますか?',
      answer: '基本的に安全な公園や屋外スペース（例：Albert Park）で行っています。屋外で行うことで、自然を感じながら体と心を整える特別な体験ができます。',
    },
    {
      question: '屋内での施術は可能ですか?',
      answer: '屋内施術をご希望の場合、初回は安全な公共の場所での利用を推奨しています。個人宅での応施術については、施術をご経験済みの方のみ応相談となります。',
    },
    {
      question: '郊外でも依頼することは可能ですか?',
      answer: '基本的にCBD（中心街）や公共交通機関の範囲内での施術となります。遠方への訪問や屋内施術の場合、安全と利便性のため別途交通費をいただく場合があります。',
    },
    {
      question: '天候によって施術は中止になりますか?',
      answer: '屋外施術は天候の影響を受けます。悪天候の場合は、安全上の理由から別の日に再スケジュールするか、屋内スペースに移動する場合があります。事前に予備日を相談していただくことで、安心してご利用いただけます。',
    },
    {
      question: '施術の質は屋外・屋内で変わりますか?',
      answer: 'すべてのプランでプロフェッショナルな施術を提供しています。事前カウンセリングと体と心の状態を丁寧に確認しながら調整を行うため、A/B/Cプランすべて同じクオリティで安心してご利用いただけます。',
    }
  ]

  return (
    <div className="mt-16 mb-16 md:mt-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          よくある質問
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
          FAQ
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
    </div>
  )
}

export default Question

