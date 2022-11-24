import React from 'react'
import { Link } from 'react-router-dom'
import rappi from '../assets/img/rappi.png'
import { useUserContext } from '../context/userContext'
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar_admin = () => {
    const { user, logoutUser } = useUserContext();

    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark nav">
        <div className="container-fluid">
          <Link to='/'><img style={{ marginLeft: '10px' }} src={rappi} width='70' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '800px', marginLeft: '70px' }} />
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            <NavDropdown title="Admin" id="basic-nav-dropdown" style={{ marginLeft: '60px', fontSize: '20px', fontWeight: 'bold', color: 'white'}}>
                <NavDropdown.Item >Email: {user.email}</NavDropdown.Item>
                <Link to="/crud_Admin">
                    <NavDropdown.Item>
                        Locales
                    </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" onClick={logoutUser}>
                    Cerrar sesion
                </NavDropdown.Item>
            </NavDropdown>
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

export default Navbar_admin