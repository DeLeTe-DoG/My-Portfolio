import { useState } from 'react'
import Header from './components/Header/Header'
import AboutMeSection from './components/Main/AboutMe/AboutMeSection'
import AboutMyWorkSection from './components/Main/AboutMyWork/AboutMyWorkSection'
import ExamplesSection from './components/Main/ExamplesSection/ExamplesSection'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <AboutMeSection />
      <AboutMyWorkSection />
      <ExamplesSection />
      <Footer />
    </>
  )
}

export default App
