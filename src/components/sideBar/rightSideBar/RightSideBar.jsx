import React from 'react'
import styles from './RightSideBar.module.css'
import { useInView } from 'react-intersection-observer'

function RightSideBar() {
  const { ref, inView } = useInView({ triggerOnce: true, treshold: 0 })

  return (
    <div
      ref={ref}
      className={styles.side}
      style={{ opacity: inView ? 1 : 0, transition: 'all 1s 3s ease' }}
    >
      <div className={styles.email}>orlovaleksandr89@gmail.com</div>
    </div>
  )
}

export default RightSideBar
