import React from 'react'
import Contact from '../contact/Contact'
import Intro from '../../sections/intro'
import About from '../../sections/about'
// import { useLocation } from 'react-router-dom'

function Home() {
  return (
    <>
      <Intro />
      <About />
      <Contact />
    </>
  )
}

export default Home
