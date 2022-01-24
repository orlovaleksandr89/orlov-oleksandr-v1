import React, { useEffect, useState } from 'react'
import styles from './RightSideBar.module.css'

function RightSideBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={show ? `${styles.side} ${styles.active}` : styles.side}>
      i am right side bar
    </div>
  )
}

export default RightSideBar
