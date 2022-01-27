import React from 'react'
import AppRouter from './components/AppRouter'
import Layout from './components/UI/Layout/Layout'

function App() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     const el = document.querySelectorAll('a')

  //     // if (el) {
  //     //   el.scrollIntoView()
  //     //   el.focus()
  //     // }
  //   }, 0)
  // }, [])

  return (
    <Layout>
      <AppRouter />
    </Layout>
  )
}

export default App
