import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../../navbar'
import { LeftSideBar } from '../../sideBar'

function Layout({ children }) {
  return (
    <main>
      <NavBar />
      <LeftSideBar />
      {children}
    </main>
  )
}
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Layout
