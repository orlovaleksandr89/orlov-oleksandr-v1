import React, { useEffect, useRef } from 'react'
import render from '../../../utils/renderHello'
import styles from './Home.module.css'

function Home() {
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
    <main className={styles.container}>
      <div ref={helloRef} className={styles.hello}></div>
      <div ref={nameRef} className={styles.hello}></div>
    </main>
  )
}

export default Home
