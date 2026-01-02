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
              <p className="text-sm md:text-base mb-2">自己紹介</p>
              <p className="text-xl md:text-2xl font-semibold">YUKI</p>
            </div>
            <div className="text-sm md:text-base space-y-2">
              <p>詳しい自己紹介を書く</p>
              <p>詳しい自己紹介を書く</p>
              <p>詳しい自己紹介を書く</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2">
            <img
              src={aboutImage1}
              alt="自己紹介 YUKI"
              className="w-full h-full object-cover"
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
                <p>活動の想いを書く</p>
                <p>活動の想いを書く</p>
                <p>活動の想いを書く</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-base md:text-lg font-semibold">バックグラウンド</h2>
              <div className="text-sm md:text-base space-y-2">
                <p>日本の活動</p>
                <p>オーストラリアの活動</p>
                <p>ニュージーランドの活動</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={aboutImage2}
              alt="バックグラウンド"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
    </div>
  )
}

export default About


