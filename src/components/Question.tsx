import React from 'react'

function Question(): React.ReactElement {
  const faqs = [
    {
      question: '施術はどこで受けられますか?',
      answer: '基本的に安全な公園や屋外スペース（例：Albert Park）で行っています。屋外で行うことで、自然を感じながら体と心を整える特別な体験ができます。なお、アレルギー等で芝生での施術が難しい方にはお身体に合わせて柔軟に対応いたします。お気軽にご相談ください。'
    },
    {
        question: '施術中の服装はどうすればいいですか？',
        answer: '基本的に服を着たまま行う施術なので動きやすく、リラックスできる服装であれば問題ありません。必要に応じてタオルを使用し、露出が必要以上に多くならないよう配慮しています。',
      },
      {
        question: 'どこまで身体に触れますか？',
        answer: '施術は、筋肉・関節・姿勢の調整を目的とした範囲で行います。デリケートゾーンへの施術や、不快に感じる部位への施術は一切行いません。施術中に違和感や不安を感じた場合はいつでも遠慮なくお知らせください。',
      },
    {
      question: '自宅など屋内での施術は可能ですか?',
      answer: 'はい、可能です。ご自宅や滞在先への出張施術を行っています。ただし、施術者・お客様双方の安全と安心を大切にするため、施術中は完全な密室にならない環境（ドアを少し開けるなど）を保つことをおすすめしています。詳しくは以下の「自宅での施術について」をご覧ください。',
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
      question: '施術の質は屋外と屋内で変わりますか?',
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

      {/* プライバシーについて */}
      <div className="mt-16 mb-16">
        {/* Title Section */}
        

        {/* Content Card */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
            自宅での施術について<br />（安全と安心のために）
          </h3>
          <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-4">
            <p>自宅で施術を行う際は、施術者とお客様双方の安全を守るための配慮を大切にしています。</p>
            <p>その一環として、施術中はお部屋のドアを完全に閉めず、適度に人目がある状態を保つことをおすすめしています。これは性別に関わらず、万が一の誤解やトラブルを防ぎ、お互いが安心して施術を受け・行うための大切なルールです。</p>
            <p>プライバシーを尊重しながらも、完全に密室にならない環境づくりを心がけています。</p>
            <p>お客様が安心して施術を受けられることを最優先に考えておりますので不安な点があれば何でもご相談ください。</p>
            <p>ご理解・ご協力をお願いいたします。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question

