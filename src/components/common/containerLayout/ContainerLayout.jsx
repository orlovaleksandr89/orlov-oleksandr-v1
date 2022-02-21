import React from 'react'
import PropTypes from 'prop-types'
import styles from './ContainerLayout.module.scss'

function ContainerLayout({ id, children }) {
  return (
    <div id={id} className={styles.container}>
      <section className={styles.section}>{children}</section>
    </div>
  )
}
ContainerLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  id: PropTypes.string.isRequired
}

export default ContainerLayout
