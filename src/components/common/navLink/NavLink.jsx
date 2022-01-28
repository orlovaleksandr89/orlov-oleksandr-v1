import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './NavLink.module.scss'

function NavLink({ title, path, onClick = null }) {
  return (
    <li>
      <Link className={styles.link} to={path} onClick={onClick}>
        {title}
      </Link>
    </li>
  )
}
NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default NavLink
