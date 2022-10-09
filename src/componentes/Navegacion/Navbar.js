import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark nav">
        <div className="container-fluid">
          <Link to='/'><img style={{ marginLeft: '10px' }} src='./Logo_navbar.png' width='70' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '800px', marginLeft: '70px' }} />
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" style={{ marginLeft: '60px', fontSize: '20px', fontWeight: 'bold', color: 'white' }} to='/registro'>Registro</Link>
              </li>
            </ul>
          </div>
          <Link to='/cart'>
            <i style={{ fontSize: '30px', paddingRight: '20px', color: 'black' }} className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar