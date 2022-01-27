import React from 'react'
import styles from './RightSideBar.module.css'
import { useInView } from 'react-intersection-observer'

function RightSideBar() {
  const { ref, inView } = useInView({ triggerOnce: true, treshold: 0 })

  return (
    <div
      ref={ref}
      className={inView ? styles.side : `${styles.side} ${styles.hide}`}
    >
      <div className={styles.email}>orlovaleksandr89@gmail.com</div>
    </div>
  )
}

export default RightSideBar
