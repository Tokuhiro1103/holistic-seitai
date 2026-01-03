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
            </div>
            <div className="text-sm md:text-base space-y-2">
              <p>幼少期から自然の中で過ごし、キャンプや野外活動を通して「人と自然のつながり」を体感して育つ。
母の影響で、ハーブやクレイ、アーユルヴェーダなど自然療法に親しみ、早くから健康や身体への関心を持つ。
18歳の頃、インド・ラダック地方で山岳地帯に滞在し、野生動物の観察・保全活動に参加。
雄大な自然と静かな時間の中で、「人は本来、もっと自然な状態で生きられる」という感覚を深める。
その後、コロナ禍をきっかけに日本各地（伊豆諸島など）で地域ボランティアに携わり、
人とのつながりや土地に根付いた文化に触れる経験を重ねる。
海外渡航再開後は、フィリピン・セブ島、マルタ島での英語留学を経て、
オーストラリア・ブリスベンへ移住。
現地の専門学校（TAFE）にて Fitness Certificate Ⅲ・Ⅳ を取得し、
オフィスワーカーからアマチュアアスリートまで、約30名以上の身体をサポート。
「体だけを整えても、人は本当には変わらない」
その実感から、解剖学・運動学だけでなく、心や生活背景を含めて人を見る視点を深めていく。
現在はニュージーランドを拠点に、
旅をしながら整体師として活動。
その人の体・心・環境を一つの“全体”として捉える
ホリスティック清体を提供している。</p>
              
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

        {/* Section 2: なぜこの清体をしているか + バックグラウンド + 写真2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Text */}
          <div className="space-y-10 text-gray-800">
            <div className="space-y-3">
              <h2 className="text-base md:text-lg font-semibold">なぜこの清体をしているか</h2>
              <div className="text-sm md:text-base space-y-2">
                <p>なぜこの整体をしているのか
幼い頃から、身近な人の病気や不調を多く見てきました。
「もっと元気に、楽しく生きられたらいいのに」
その想いが、僕の原点です。
オーストラリアで人体や運動を学び、
多くの人の体を見てきた中で強く感じたのは、
同じ施術や運動でも、効果は人それぞれだということでした。
体の状態だけでなく、
生活、考え方、心のクセが結果に大きく影響している。
この経験が、今の施術スタイルにつながっています。
僕の役割は、治すことではありません。
気づくきっかけをつくることです。
そこからどう整えていくかは、その人自身。
自分の体と心に向き合う、その一歩をサポートしています。</p>
                
              </div>
            </div>

            
          </div>

          {/* Right Image */}
          <div className="aspect-[550/270]">
            <img
              src={aboutImage2}
              alt="バックグラウンド"
              className="w-full h-full object-contain"
            />
          </div>
        </section>
    </div>
  )
}

export default About


