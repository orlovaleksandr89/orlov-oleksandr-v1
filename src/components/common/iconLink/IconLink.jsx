import React from 'react'
import styles from './IconLink.module.scss'
import PropTypes from 'prop-types'

function IconLink({ href, component }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={styles.icon_link}
    >
      {component}
    </a>
  )
}
IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  component: PropTypes.object
}

export default IconLink
