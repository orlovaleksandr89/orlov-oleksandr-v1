import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './NavLink.module.scss'

function NavLink({ title, path, onClick = null }) {
  const handleClick = () => {
    const el = document.querySelector(path)
    el.scrollIntoView()
  }

  return (
    <li>
      <Link className={styles.link} to={path} onClick={handleClick}>
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
