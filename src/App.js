import React from 'react'
import AppRouter from './components/AppRouter'
import NavBar from './components/navbar'
import { LeftSideBar, RightSideBar } from './components/sideBar'

function App() {
  return (
    <>
      <NavBar />
      <AppRouter />
      <LeftSideBar />
      <RightSideBar />
    </>
  )
}

export default App
