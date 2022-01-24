import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  const [show, setShow] = useState(false)

  const toggleNavHandler = () => {
    const body = document.querySelector('body')
    body.classList.toggle('blur')
    setShow((prev) => !prev)
  }

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>Oleksandr Orlov</div>

        <div className={styles.list}>
          <ul className={styles.ul}>
            <li>
              <Link className={styles.link} onClick={toggleNavHandler} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                onClick={toggleNavHandler}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                onClick={toggleNavHandler}
                to="/contact"
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={
            show
              ? `${styles.icon_menu} ${styles.active}`
              : `${styles.icon_menu}`
          }
          onClick={toggleNavHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <aside
          className={
            show ? `${styles.backdrop} ${styles.active}` : styles.backdrop
          }
        >
          <ul className={styles.ul}>
            <Link className={styles.link} onClick={toggleNavHandler} to="/">
              Home
            </Link>
            <Link
              className={styles.link}
              onClick={toggleNavHandler}
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className={styles.link}
              onClick={toggleNavHandler}
              to="/contact"
            >
              Contact me
            </Link>
          </ul>
        </aside>
      </nav>
    </header>
  )
}

export default NavBar
