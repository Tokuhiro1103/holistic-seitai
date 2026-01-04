import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
      {children}
    </div>
  )
}

export default Layout

