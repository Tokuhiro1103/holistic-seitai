import React from 'react'
import aboutImage1 from '../assets/photos/img_about1.jpg'
import aboutImage2 from '../assets/photos/img_about2.jpg'

function About(): React.ReactElement {
  return (
    <main className="w-full bg-gray-100 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 space-y-24">
        {/* Section 1: 自己紹介 + 写真1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Text */}
          <div className="order-2 md:order-1 space-y-6 text-gray-800">
            <div>
              <p className="text-sm md:text-base mb-2">自己紹介</p>
              <p className="text-xl md:text-2xl font-semibold">YUKI</p>
            </div>
            <div className="text-sm md:text-base space-y-2">
              <p>ニュージーランドの器清体がどうたら</p>
              <p>ニュージーランドの器清体がどうたら</p>
              <p>ニュージーランドの器清体がどうたら</p>
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
                <p>ニュージーランドの器清体がどうたら</p>
                <p>ニュージーランドの器清体がどうたら</p>
                <p>ニュージーランドの器清体がどうたら</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-base md:text-lg font-semibold">バックグラウンド</h2>
              <div className="text-sm md:text-base space-y-2">
                <p>ニュージーランドの器清体がどうたら</p>
                <p>ニュージーランドの器清体がどうたら</p>
                <p>ニュージーランドの器清体がどうたら</p>
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
    </main>
  )
}

export default About


