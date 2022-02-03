import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './NavLink.module.scss'

function NavLink({ title, path, onClick = null }) {
  const handleClick = (event) => {
    event.preventDefault()
    const el = document.querySelector(path)
    el.scrollIntoView()
    if (onClick) {
      onClick()
    }
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

export default memo(NavLink)
