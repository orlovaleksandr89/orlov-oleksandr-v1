import React from 'react'
import styles from './RightSideBar.module.scss'
import { useInView } from 'react-intersection-observer'

function RightSideBar() {
  const { ref, inView } = useInView({ triggerOnce: true, treshold: 0 })

  return (
    <div
      ref={ref}
      className={inView ? styles.side : `${styles.side} ${styles.hide}`}
    >
      <div className={styles.email}>
        <a href="mailto:orlovaleksandr89@gmail.com">
          orlovaleksandr89@gmail.com
        </a>
      </div>
    </div>
  )
}

export default RightSideBar
