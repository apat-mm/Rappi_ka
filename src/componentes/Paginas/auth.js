import React, { useState } from "react";
import Signin from "./Registro";
import Signup from "./Registro_c";
import Footer from "../Navegacion/Footer";


const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div>
    <div className="usuario">
        {!index ? <Signin /> : <Signup />}
        <p onClick={toggleIndex} className="texto_usuario">
          {!index ? "¿Nuevo usuario? Haz click aquí " : "¿Ya tienes una cuenta? Haz click aquí"}
        </p>
    </div>
    <Footer/>
    </div>
  );
};

export default Auth;