import logImg from '../assets/images/img_logo/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/"><img src={logImg} alt="logo" className='img-fluid'  style={{width:'12rem'}}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <NavLink  className="nav-link" aria-current="page" to='/'>Home</NavLink>
            <NavLink className={`nav-link`} to="/service">service</NavLink>
            <NavLink className={`nav-link`} to="/tracking">Tracking</NavLink>
            <NavLink className={`nav-link`} to="/contact">Contact</NavLink>
          </div>
          <button className="btn bg-danger text-white">Request Quote</button>
        </div>
      </div>
    </nav>
  )
}

export default Header