import React from 'react'
import PropTypes from 'prop-types'
import styles from './PageLayout.module.scss'

function PageLayout({ children }) {
  return <main className={styles.container}>{children}</main>
}
PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default PageLayout
