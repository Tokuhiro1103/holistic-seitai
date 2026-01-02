import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Top from './components/Top'
import Concept from './components/Concept'
import Sejutsu from './components/Sejutsu'
import Why from './components/Why'
import Recommend from './components/Recommend'
import Background from './components/Background'
import About from './components/About'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <main className="pt-16">
        <Routes>
          <Route path="/" element={
            <>
              <Top />
                <Layout>
                  <Concept />
                  <Sejutsu />
                  <Why />
                  <Recommend />
                  <Background />
                </Layout>

            </>
          } />
          <Route path="/about" element={
              <Layout>
                <About />
              </Layout>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
