import React from 'react'

function Review(): React.ReactElement {
  const reviews = [
    {
      name: 'Mさん',
      gender: '女性',
      text: '自然の中での清体はとても印象的でした。オイルと服の上からの施術を通して、身体を「ほぐす」というより身体と対話してもらった感覚です。触れる手が止まる場所が、まさに自分でも気になっていた部分で驚きました。施術後は心が静まり、忘れていた自分を思い出すような時間でした。',
      showQuote: true
    },
    {
      name: 'Eさん',
      gender: '女性',
      text: '短い時間なのに、身体に触れただけで内面の状態まで理解してもらえた感覚がありました。気持ちも身体も楽になり「こういう感覚を大切にしたい」と思い出させてもらえました。',
      showQuote: true
    },
    {
      name: 'Tさん',
      gender: '男性',
      text: '自分の身体を改めて見直すとても良いきっかけになりました。対話を通して、身体の状態を木に例えて説明してくれたのが分かりやすくすっと腑に落ちました。呼吸やセルフケアを意識して日常に取り入れていこうと思います。',
      showQuote: true
    },
    {
      name: 'Tさん',
      gender: '女性',
      text: 'これまで多くの施術を受けてきましたが、とても丁寧で必要なところにしっかり力が届く施術でした。手の質が違うと感じます。生まれ持った感覚を大切にされている方だと思いました。',
      showQuote: false
    },
    {
      name: 'Sさん',
      gender: '女性',
      text: '最初のやり取りから丁寧で安心感がありました。自然の中で鳥の声を聞きながら受ける施術はとてもリラックスできました。施術は優しく、終わった後にじわじわ効いてくる感覚があり忙しい時期でも元気に過ごせました。',
      showQuote: false
    },
    {
      name: 'Nさん',
      gender: '女性',
      text: 'ここ1年自分のことを後回しにしていたと気づかされました。この施術が一つの転機になったように感じています。何も説明していないのに、今の状態を的確に伝えられたことに驚きました。心と身体を同時に整えてもらえた時間でした。',
      showQuote: false
    }
  ]

  return (
    <div className="mt-16 mb-16 md:mt-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          お客様の声
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
            {review.showQuote && (
              <div className="absolute top-4 left-4 text-gray-300 text-6xl md:text-7xl font-serif leading-none select-none">
                "
              </div>
            )}
            
            {/* Review Content */}
            <div className={`${review.showQuote ? 'pl-8' : ''} flex flex-col flex-1`}>
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

