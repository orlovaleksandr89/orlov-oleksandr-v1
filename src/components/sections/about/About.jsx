import React from 'react'
import styles from './About.module.scss'
import { useInView } from 'react-intersection-observer'

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    treshold: 0,
    rootMargin: '-50%'
  })
  console.log(inView)
  return (
    <div className={styles.container} ref={ref}>
      <section
        className={inView ? `${styles.section} ${styles.show}` : styles.section}
      >
        <h2 className={styles.title}>About me</h2>
        <div className={styles.inner}>
          <div className={styles.about}>
            <p>
              Hello, my name is Oleksandr. I am a passionate self-taught
              front-end developer.
            </p>
            <p>
              My journey as a frontend develover started in 2020. Since then I
              discovered a beautiful things abou the web.
            </p>
            <p className={styles.p_bg}>
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React.js</li>
              <li>Redux.js</li>
            </ul>
          </div>
          <div className={styles.hero}></div>
        </div>
      </section>
    </div>
  )
}

export default About
