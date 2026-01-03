import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navigation(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleLinkClick = (path: string) => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-4 right-4 z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 flex flex-col justify-center items-center backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors duration-200"
        aria-label="メニューを開く"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {/* Menu Dropdown */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Items */}
        <div
          className={`absolute top-16 right-0 bg-white rounded-lg shadow-lg min-w-[180px] overflow-hidden transition-all duration-300 ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <button
            onClick={() => handleLinkClick('/')}
            className="w-full text-left px-6 py-4 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
          >
            ホーム
          </button>
          <button
            onClick={() => handleLinkClick('/about')}
            className="w-full text-left px-6 py-4 text-gray-800 hover:bg-gray-100 transition-colors duration-200 border-t border-gray-200"
          >
            自己紹介
          </button>
          <button
            onClick={() => handleLinkClick('/price')}
            className="w-full text-left px-6 py-4 text-gray-800 hover:bg-gray-100 transition-colors duration-200 border-t border-gray-200"
          >
            プラン
          </button>
        </div>
      </>
    </nav>
  )
}

export default Navigation

