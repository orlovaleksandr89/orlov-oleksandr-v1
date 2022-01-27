import React from 'react'
import styles from './LeftSideBar.module.css'
import { useInView } from 'react-intersection-observer'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function LeftSideBar() {
  const { ref, inView } = useInView({ triggerOnce: true, treshold: 0 })

  return (
    <div
      ref={ref}
      className={inView ? styles.side : `${styles.side} ${styles.hide}`}
    >
      <ul className={styles.icons}>
        <div>
          <li>
            <a
              href="https://www.instagram.com/orlov_oleksandr/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon_link}
            >
              <FaInstagram />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/oleksandr-orlov-9b6525108/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon_link}
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/orlovaleksandr89"
              target="_blank"
              rel="noreferrer"
              className={styles.icon_link}
            >
              <FaGithub />
            </a>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default LeftSideBar
