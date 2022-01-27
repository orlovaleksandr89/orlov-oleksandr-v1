import React, { useEffect, useRef } from 'react'
import render from '../../../utils/renderHello'
import styles from './Home.module.css'
import { useInView } from 'react-intersection-observer'
import Contact from '../Contact'
import Projects from '../Projects'

function Home() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: '-100px 0px',
    triggerOnce: true
  })

  const helloRef = useRef(null)
  const nameRef = useRef(null)

  useEffect(() => {
    render(helloRef.current, 'Hello world')
    render(nameRef.current, 'My name is Oleksandr')

    return () => {
      helloRef.current = ''
      nameRef.current = ''
    }
  }, [])
  return (
    <>
      <main className={styles.container}>
        <div className={styles.first}>
          <code ref={helloRef} className={styles.hello}></code>
          <div ref={nameRef} className={styles.hello}></div>
        </div>
        <div className={styles.second}>
          <div
            ref={ref}
            style={{ opacity: inView ? 1 : 0, transition: 'all 1s ease' }}
          >
            <Projects />
          </div>
        </div>
        <div className={styles.third}>
          <Contact />
        </div>
      </main>
    </>
  )
}

export default Home
