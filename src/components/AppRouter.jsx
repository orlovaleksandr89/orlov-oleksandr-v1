import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/homePage'
import Projects from './pages/Projects'

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route path="/projects" exact>
        <Projects />
      </Route>
    </Switch>
  )
}

export default AppRouter
