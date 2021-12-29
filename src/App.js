import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Links from './components/Links'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <Links />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
      </Switch>
      <Links />
    </BrowserRouter>
  )
}

export default App
