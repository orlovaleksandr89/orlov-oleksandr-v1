import React, { useEffect, useRef } from 'react'
import render from '../../../utils/renderHello'
import { FaChevronDown } from 'react-icons/fa'
import styles from './Intro.module.scss'
import { useInView } from 'react-intersection-observer'

function Intro() {
  const helloRef = useRef(null)
  const nameRef = useRef(null)
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const handleClick = (event) => {
    event.preventDefault()
    const el = document.getElementById('about')
    el.scrollIntoView()
  }

  useEffect(() => {
    render(helloRef.current, 'Hello world')
    render(nameRef.current, 'My name is Oleksandr', 30)

    return () => {
      helloRef.current = ''
      nameRef.current = ''
    }
  }, [])
  return (
    <div className={styles.page} id="home">
      <div className={styles.hello_wrapper}>
        <code ref={helloRef} className={styles.hello}></code>
        <div ref={nameRef} className={styles.hello}></div>
      </div>

      <div className={styles.btn_wrapper}>
        <button
          className={inView ? `${styles.btn} ${styles.show}` : styles.btn}
          ref={ref}
          onClick={handleClick}
        >
          <FaChevronDown />
        </button>
      </div>
    </div>
  )
}

export default Intro
