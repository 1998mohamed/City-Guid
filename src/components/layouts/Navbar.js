import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand ml-5" href="#">
    <img src={logo} alt="logo" style={{width: '35px' }} />
     </a>
    <button className="navbar-toggler"
     type="button"
     data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent"
      aria-expanded="false" 
     aria-label="Toggle navigation">
      
      <span>
        <i className="fas fa-bars" style={{color: '#fff' }} />
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item  active">
          <Link className="nav-link home text-white text-uppercase" to="/home"> HOME&nbsp;<i class="fas fa-home"></i>
           </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link home text-white text-uppercase" to="/news"> NEWS </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link home text-white text-uppercase"  to="/contacts"> CONTACT US </Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    );
}
export default Navbar;

