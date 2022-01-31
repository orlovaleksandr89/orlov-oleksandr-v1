import React from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Projects.module.scss'

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: '-100px 0px',
    triggerOnce: true
  })
  return (
    <div
      ref={ref}
      id="projects"
      className={inView ? styles.page : `${styles.page} ${styles.show}`}
    >
      Projects
    </div>
  )
}

export default Projects
