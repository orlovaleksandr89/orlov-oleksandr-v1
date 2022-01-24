import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../../navbar'
import { LeftSideBar, RightSideBar } from '../../sideBar'

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <LeftSideBar />
      <RightSideBar />
      {children}
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Layout
