import React from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Projects.module.scss'

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: '-100px 0px',
    triggerOnce: false
  })
  return (
    <div ref={ref} id="projects" className={styles.page}>
      <div
        className={
          inView ? `${styles.projects} ${styles.show}` : styles.projects
        }
      >
        Comming soon
      </div>
    </div>
  )
}

export default Projects
