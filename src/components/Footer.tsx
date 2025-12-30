import React from 'react'

function Footer(): React.ReactElement {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">NO MOVE NO LIFE</h3>
            <p className="text-sm text-gray-300">自然と調和した清体</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

