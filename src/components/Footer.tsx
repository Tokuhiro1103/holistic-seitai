import React from 'react'

function Footer(): React.ReactElement {
  return (
    <footer className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          
          <div className="text-center">
            <p className="text-sm text-gray-800">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

