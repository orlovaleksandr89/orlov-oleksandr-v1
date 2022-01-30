import React from 'react'
import styles from './LeftSideBar.module.css'
import { useInView } from 'react-intersection-observer'
import IconLink from '../../common/iconLink'
import { icons } from '../../../config'

function LeftSideBar() {
  const { ref, inView } = useInView({ triggerOnce: true, treshold: 0 })

  return (
    <div
      ref={ref}
      className={inView ? styles.side : `${styles.side} ${styles.hide}`}
    >
      <ul className={styles.icons}>
        <div>
          {icons.map((icon) => {
            return (
              <li key={icon.href}>
                <IconLink {...icon} />
              </li>
            )
          })}
        </div>
      </ul>
    </div>
  )
}

export default LeftSideBar
