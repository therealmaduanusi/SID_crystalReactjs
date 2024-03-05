import React from 'react'
import logImg from '../assets/images/img_logo/logo.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/"><img src={logImg} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <a className="nav-link active text-danger" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="/service">service</a>
            <a className="nav-link" href="/tracking">Tracking</a>
            <a className="nav-link" href="/contact">Contact</a>
          </div>
          <button className="btn bg-danger text-white">Request Quote</button>
        </div>
      </div>
    </nav>
  )
}

export default Header