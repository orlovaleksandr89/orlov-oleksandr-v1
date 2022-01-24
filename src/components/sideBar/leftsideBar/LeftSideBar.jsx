import React, { useEffect, useState } from 'react'
import styles from './LeftSideBar.module.css'

function LeftSideBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <div className={show ? `${styles.side} ${styles.active}` : styles.side}>
      i am left side bar
    </div>
  )
}

export default LeftSideBar
