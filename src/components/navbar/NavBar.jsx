import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useInView } from 'react-intersection-observer'
import { useScrollDirection } from '../../hooks'

function NavBar() {
  const { ref, inView } = useInView({
    triggerOnce: true
  })
  const scrollDirection = useScrollDirection('down')
  const [show, setShow] = useState(false)
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const toggleNavHandler = () => {
    const body = document.querySelector('body')
    body.classList.toggle('blur')
    setShow((prev) => !prev)
  }
  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener(handleScroll)
    }
  }, [])

  return (
    <header ref={ref} className={inView ? '' : styles.hide}>
      <nav
        className={
          scrolledToTop || scrollDirection === 'up'
            ? styles.nav
            : `${styles.nav} ${styles.up}`
        }
      >
        <div className={styles.logo}>Oleksandr Orlov</div>

        <div className={styles.list}>
          <ul className={styles.ul}>
            <li>
              <Link className={styles.link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/second">
                Projects
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/third">
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
