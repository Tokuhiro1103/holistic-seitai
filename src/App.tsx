import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Top from './components/Top'
import Concept from './components/Concept'



function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <main className="pt-16">
        <Routes>
          <Route path="/" element={
            <>
              <Top />
              <Concept />
            </>
          } />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
