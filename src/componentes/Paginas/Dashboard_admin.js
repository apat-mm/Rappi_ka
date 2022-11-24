import React from "react";
import { useUserContext } from "../context/userContext";
import Navbar_admin from "../Navegacion/Navbar_Admin";
import { Link } from 'react-router-dom';

const Dashboard_admin = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <>
    <Navbar_admin/>
    <div className="form">
      <form>
        <h1>Dashboard admin</h1>
        <h2>Email : {user.email}</h2>
        <Link to="/crud_admin">
            <button>Crud</button>
        </Link>
        <button onClick={logoutUser}>Cerrar sesión</button>
      </form>  
    </div>
    </>
  );
};

export default Dashboard_admin;