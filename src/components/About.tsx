import React from 'react'
import aboutImage1 from '../assets/photos/img_about1.jpg'
import aboutImage2 from '../assets/photos/img_about2.jpg'

function About(): React.ReactElement {
  return (
    <div className="space-y-24">
      {/* Section 1: 自己紹介 + 写真1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div className="order-2 md:order-1 space-y-6 text-gray-800">
          <div>
            <p className="text-xl md:text-2xl mb-2">自己紹介</p>
            <p className="text-xl md:text-2xl font-semibold">YUKI UNO</p>
            <p className="text-base md:text-lg text-gray-600 mt-2">Holistic Body Therapy Practitioner</p>
          </div>
          <div className="text-sm md:text-base space-y-2">
            <p>幼少期から自然の中で過ごし、キャンプや野外活動を通して「人と自然のつながり」を体感して育つ。
母の影響でハーブやクレイ、アーユルヴェーダなど自然療法に親しみ早くから健康や身体への関心を持つ。<br />
このページは私のこれまでの経験を含めた自己紹介やや現在の活動を始めた理由について書いています。</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 aspect-[550/270]">
          <img
            src={aboutImage1}
            alt="自己紹介 YUKI"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Thematic Summary Boxes */}
      <section className="space-y-8">
        {/* Decorative Divider */}
        <div className="flex items-center justify-center">
          <svg 
            className="w-24 md:w-32 h-6 text-gray-300" 
            viewBox="0 0 100 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 10 Q 30 5, 50 10 T 90 10" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
            />
          </svg>
        </div>

        {/* Three Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">自然との原体験</h3>
            <p className="text-sm text-gray-600">自然の中で育ち、人と自然のつながりを体感</p>
          </div>

          {/* Box 2 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">旅と学び</h3>
            <p className="text-sm text-gray-600">インド・日本・オーストラリアを巡る経験</p>
          </div>

          {/* Box 3 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">💚</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">身体と心の理解</h3>
            <p className="text-sm text-gray-600">「体だけ変えても人は変わらない」という実感</p>
          </div>
        </div>
      </section>

      {/* Section 2: 自然の中で育った原体験 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold">インドでの経験</h2>
          <div className="text-sm md:text-base space-y-3">
            <p>18歳の頃、インド・ラダック地方で山岳地帯に滞在し、野生動物の観察・保全活動に参加。
            雄大な自然と静かな時間の中で、「人は本来、もっと自然な状態で生きられる」という感覚を深める。</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="aspect-[550/270]">
          <img
            src={aboutImage2}
            alt="自然の中で育った原体験"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Section 3: 旅と学びの時 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold">地域ボランティア</h2>
          <div className="text-sm md:text-base space-y-3">
            <p>コロナ禍をきっかけに日本各地（伊豆諸島など）で地域ボランティアに携わり、
            人とのつながりや土地に根付いた文化に触れる経験を重ねる。</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="aspect-[550/270]">
          <img
            src={aboutImage2}
            alt="旅と学びの時"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Section 4: 僕が"整える"という言葉を使う理由 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold">英語留学</h2>
          <div className="text-sm md:text-base space-y-3">
            <p>海外渡航再開後は、フィリピン・セブ島、マルタ島での英語留学を経験</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="aspect-[550/270]">
          <img
            src={aboutImage2}
            alt="整えるという言葉を使う理由"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Section 4: 僕が"整える"という言葉を使う理由 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold">オーストラリアでCertificateを取得</h2>
          <div className="text-sm md:text-base space-y-3">
            <p>オーストラリア・ブリスベンへ移住。
現地の専門学校（TAFE）にて Fitness Certificate Ⅲ・Ⅳ を取得し、
オフィスワーカーからアマチュアアスリートまで、約30名以上の身体をサポート。
「体だけを整えても、人は本当には変わらない」
その実感から、解剖学・運動学だけでなく、心や生活背景を含めて人を見る視点を深めていく。</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="aspect-[550/270]">
          <img
            src={aboutImage2}
            alt="整えるという言葉を使う理由"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
    </div>
  )
}

export default About


