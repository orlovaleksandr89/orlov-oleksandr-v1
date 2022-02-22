import React, { Suspense } from 'react'
import Intro from '../../sections/intro'
import About from '../../sections/about'
const Projects = React.lazy(() => import('../../sections/projects/Projects'))
const Contact = React.lazy(() => import('../../sections/contact/Contact'))

function Home() {
  return (
    <>
      <Intro />
      <About />
      <Suspense fallback={<p>Loading...</p>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Contact />
      </Suspense>
    </>
  )
}

export default Home
