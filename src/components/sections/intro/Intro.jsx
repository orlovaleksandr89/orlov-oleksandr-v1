import React, { useEffect, useRef } from 'react'
import render from '../../../utils/renderHello'
import styles from './Intro.module.scss'

function Intro() {
  const helloRef = useRef(null)
  const nameRef = useRef(null)

  useEffect(() => {
    render(helloRef.current, 'Hello world')
    render(nameRef.current, 'My name is Oleksandr', 30)

    return () => {
      helloRef.current = ''
      nameRef.current = ''
    }
  }, [])
  return (
    <div className={styles.page}>
      <code ref={helloRef} className={styles.hello}></code>
      <div ref={nameRef} className={styles.hello}></div>
    </div>
  )
}

export default Intro
