import React from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Projects.module.scss'
import { projects } from '../../../config'
import ProjectCard from '../../common/projectCard/ProjectCard'

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: '-50px 0px',
    triggerOnce: true
  })
  return (
    <div ref={ref} id="projects" className={styles.page}>
      <h3>Projects I&apos;ve build</h3>
      <div
        className={
          inView ? `${styles.projects} ${styles.show}` : styles.projects
        }
      >
        {projects.map((project) => {
          return <ProjectCard {...project} key={project.hrefOnline} />
        })}
      </div>
    </div>
  )
}

export default Projects
