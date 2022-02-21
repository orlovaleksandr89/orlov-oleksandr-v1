import React from 'react'
import styles from './About.module.scss'
import { useInView } from 'react-intersection-observer'
import img from '../../../assets/me.jpg'
import { skills } from '../../../config'
import Title from '../../common/title/Title'
import ContainerLayout from '../../common/containerLayout/ContainerLayout'

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    treshold: 0,
    rootMargin: '-50%'
  })
  console.log(inView)
  return (
    <ContainerLayout id="about">
      <Title title={'About me'} />
      <div ref={ref} className={styles.inner}>
        <div className={styles.about}>
          <p>
            Hello, my name is Oleksandr. I am a passionate self-taught frontend
            developer.
          </p>
          <p>
            My journey as a frontend develover started in 2021. Since then I
            discovered many beautiful things about the web.
          </p>
          <p>
            I&apos;m not afraid of difficult tasks. Nice guy who understands JS
            basics and love to code.
          </p>
          <p className={styles.p_bg}>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className={styles.ul}>
            {skills.map((item) => {
              return (
                <li key={item.title} className={styles.ul_li}>
                  <span>{item.icon}</span>{' '}
                  <span className={styles.ul_li_title}>{item.title}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.hero}>
          <img
            src={img}
            alt="Oleksandr Orlov image"
            className={styles.hero_img}
          />
        </div>
      </div>
    </ContainerLayout>
  )
}

export default About
