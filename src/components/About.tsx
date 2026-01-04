import React from 'react'
import { useTranslation } from 'react-i18next'
import aboutImage1 from '../assets/photos/img_about1.jpg'
import aboutImage2 from '../assets/photos/img_about2.jpg'
import aboutImage3 from '../assets/photos/img_about3.jpg'
import aboutImage4 from '../assets/photos/img_about4.jpg'
import aboutImage5 from '../assets/photos/img_about5.jpg'
import aboutImage6 from '../assets/photos/img_about6.jpg'

function About(): React.ReactElement {
  const { t } = useTranslation()

  return (
    <div className="space-y-24 mb-16">
      {/* Section 1: 自己紹介 + 写真1 */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">{t('about.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Text */}
          <div className="order-2 md:order-1 space-y-6 text-gray-800">
            <div>
              <p className="text-xl md:text-2xl font-semibold">{t('about.name')}</p>
              <p className="text-base md:text-lg text-gray-600 mt-2">{t('about.subtitle')}</p>
            </div>
            <div className="text-sm md:text-base space-y-2">
              <p dangerouslySetInnerHTML={{ __html: t('about.intro').replace(/\n/g, '<br />') }}></p>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2 aspect-[350/270] flex items-center justify-center">
            <img
              src={aboutImage1}
              alt={t('about.title')}
              className="max-w-full max-h-full object-contain shadow-md block"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Section 2: 自然の中で育った原体験 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start ">
        {/* Left Text */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-xl md:text-2xl font-bold">{t('about.sections.india.title')}</h2>
          <div className="text-sm md:text-base space-y-3">
            <p>{t('about.sections.india.text')}</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="aspect-[465/270]">
          <img
            src={aboutImage3}
            alt={t('about.sections.india.title')}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Section 3: 旅と学びの時 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-xl md:text-2xl font-bold">{t('about.sections.volunteer.title')}</h2>
          <div className="text-sm md:text-base space-y-3">
            <p>{t('about.sections.volunteer.text')}</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="aspect-[500/270]">
          <img
            src={aboutImage4}
            alt={t('about.sections.volunteer.title')}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Section 4: 僕が"整える"という言葉を使う理由 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-xl md:text-2xl font-bold">{t('about.sections.study.title')}</h2>
          <div className="text-sm md:text-base space-y-3">
            <p>{t('about.sections.study.text')}</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="aspect-[400/270]">
          <img
            src={aboutImage5}
            alt={t('about.sections.study.title')}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Section 4: 僕が"整える"という言葉を使う理由 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-xl md:text-2xl font-bold">{t('about.sections.certificate.title')}</h2>
          <div className="text-sm md:text-base space-y-3">
            <p>{t('about.sections.certificate.text')}</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="aspect-[360/270]">
          <img
            src={aboutImage2}
            alt={t('about.sections.certificate.title')}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Section 4: 僕が"整える"という言葉を使う理由 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-xl md:text-2xl font-bold">{t('about.sections.nz.title')}</h2>
          <div className="text-sm md:text-base space-y-3">
            <p>{t('about.sections.nz.text')}</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="aspect-[360/270]">
          <img
            src={aboutImage6}
            alt={t('about.sections.nz.title')}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Note Link Section */}
      <section className="mt-16 text-center">
        <a 
          href="https://note.com/achatfitness001" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 text-xl md:text-xl font-medium hover:text-gray-600 transition-colors duration-200 inline-flex items-center gap-2"
        >
          <span>→</span>
          <span>{t('about.note')}</span>
        </a>
      </section>
    </div>
  )
}

export default About


