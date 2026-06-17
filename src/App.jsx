import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import BookSlider from './components/BookSlider'
import SalientFeatures from './components/SalientFeatures'
import PublishedBooks from './components/PublishedBooks'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <HeroSlider/>
      <BookSlider/>
      <SalientFeatures/>
      <PublishedBooks/>
      <Footer/>
    </>
  )
}

export default App
