import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Contact from './pages/contact/Contact'
import Home from './pages/homePage'
import Projects from './pages/projects/Projects'
import PageLayout from './UI/Layout/pageLayout'

function AppRouter() {
  const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/projects', name: 'Projects', Component: Projects },
    { path: '/contact', name: 'Contact', Component: Contact }
  ]
  return (
    <PageLayout>
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </PageLayout>
  )
}

export default AppRouter
