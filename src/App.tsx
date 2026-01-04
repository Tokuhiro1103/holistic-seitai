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
import Contact from './components/Contact'
import Price from './components/Price'
import Question from './components/Question'
import Navigation from './components/Navigation'


function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
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
                  <Contact />
                </Layout>

            </>
          } />
          <Route path="/about" element={
              <Layout>
                <About />
              </Layout>
          } />
          <Route path="/price" element={
              <Layout>
                <Price />
                <Question />
              </Layout>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
