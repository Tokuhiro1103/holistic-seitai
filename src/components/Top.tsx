import React from 'react'
import { useTranslation } from 'react-i18next'
import topImage from '../assets/photos/img_top.png'

function Top(): React.ReactElement {
  const { t } = useTranslation()

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-start px-8 md:px-16 lg:px-24 -mt-16 bg-position-right-center"
      style={{
        backgroundImage: `url(${topImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* White gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          {t('top.title')}
        </h1>
        <p className="text-2xl md:text-2xl lg:text-3xl drop-shadow-md">
          {t('top.subtitle')}
        </p>
      </div>
    </section>
  )
}

export default Top

