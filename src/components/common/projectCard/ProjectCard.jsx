import React from 'react'
import styles from './ProjectCard.module.scss'
import PropTypes from 'prop-types'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

function ProjectCard({ hrefOnline, title, description, hrefGit, img, stack }) {
  const { ref, inView } = useInView({
    treshold: 1,
    rootMargin: '-70px',
    triggerOnce: true
  })
  console.log(inView)
  return (
    <>
      <div
        className={inView ? `${styles.card} ${styles.show}` : styles.card}
        ref={ref}
      >
        <img src={img} alt={title} />
        <div className={styles.card_content}>
          <p>{title}</p>
          <p>{description}</p>
          <p>{stack}</p>

          <div className={styles.links}>
            <a
              href={hrefOnline}
              className={styles.links_a}
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <FiExternalLink />
            </a>
            <a
              href={hrefGit}
              className={styles.links_a}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
ProjectCard.propTypes = {
  hrefOnline: PropTypes.string,
  hrefGit: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  stack: PropTypes.string
}
export default ProjectCard
