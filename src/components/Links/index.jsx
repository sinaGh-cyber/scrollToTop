import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Links.module.css'

const Links = () => {
  return (
    <div className={classes.container}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Links
