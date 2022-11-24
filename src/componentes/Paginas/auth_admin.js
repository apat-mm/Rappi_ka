import React, { useState } from "react";
import SigninAdmin from "./admin";
import Signup from "./Registro_c";
import Footer from "../Navegacion/Footer";


const Auth_admin = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div>
        <div className="usuario">
            {!index ? <SigninAdmin /> : <Signup />}
            <p onClick={toggleIndex} className="texto_usuario">
            {!index ? "¿Nuevo admin? Haz click aquí " : "¿Ya tienes una cuenta? Haz click aquí"}
            </p>
        </div>
        <Footer/>
    </div>
  );
};

export default Auth_admin;