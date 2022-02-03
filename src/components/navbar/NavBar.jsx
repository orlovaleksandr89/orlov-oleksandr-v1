import React, { useCallback, useEffect, useState } from 'react'
import styles from './NavBar.module.scss'
import { useInView } from 'react-intersection-observer'
import { useScrollDirection } from '../../hooks'
import { links } from '../../config'
import NavLink from '../common/navLink'

function NavBar() {
  const { ref, inView } = useInView({
    triggerOnce: true
  })
  const scrollDirection = useScrollDirection('down')
  const [show, setShow] = useState(false)
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const toggleNavHandler = useCallback(() => {
    const body = document.querySelector('body')
    body.classList.toggle('blur')
    setShow((prev) => !prev)
  }, [])

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
    <header
      ref={ref}
      className={inView ? styles.header : `${styles.header} ${styles.hide}`}
    >
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
            {links.map((link) => {
              return <NavLink key={link.path} {...link} />
            })}
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
            {links.map((link) => {
              return (
                <NavLink key={link.path} {...link} onClick={toggleNavHandler} />
              )
            })}
          </ul>
        </aside>
      </nav>
    </header>
  )
}

export default NavBar
