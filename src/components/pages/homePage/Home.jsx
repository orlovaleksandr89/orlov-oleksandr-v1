import React, { useEffect, useRef } from 'react'
import render from '../../../utils/renderHello'
import styles from './Home.module.css'
import { useInView } from 'react-intersection-observer'

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
          <div ref={helloRef} className={styles.hello}></div>
          <div ref={nameRef} className={styles.hello}></div>
        </div>
        <div className={styles.second}>
          <div
            ref={ref}
            style={{ opacity: inView ? 1 : 0, transition: 'all 1s ease' }}
          >
            Another div
          </div>
        </div>
        <div className={styles.third}></div>
      </main>
    </>
  )
}

export default Home
