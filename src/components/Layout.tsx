import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <div className="relative">
      {/* Animated Blobs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-green-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-amber-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-green-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 relative z-10">
        {children}
      </div>
    </div>
  )
}

export default Layout

