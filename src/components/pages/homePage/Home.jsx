import React from 'react'
import Contact from '../../sections/contact/Contact'
import Intro from '../../sections/intro'
import About from '../../sections/about'
import Projects from '../../sections/projects/Projects'

function Home() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
