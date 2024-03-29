import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">


        <li className="nav-item">
          <NavLink to="/" className="nav-link " aria-current="page" >Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/about" className="nav-link " aria-current="page" >About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/contact" className="nav-link " aria-current="page" >Contact</NavLink>
        </li>
  
        
      </ul>
      
    </div>
  </div>
</nav>

    )
  }
}

export default Header