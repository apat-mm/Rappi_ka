import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import { Formulario } from "./Registro_c";
import Registro from "./Registro";
import Footer from "../Navegacion/Footer";

const Auth = () => {
    const [index, setIndex] = useState(false);
    const toggleIndex = () => {
        setIndex((prevState) => !prevState);
    };

    const { signInWithGoogle, signInWithGithub } = useUserContext();

    return (
        <div style={{ background: '#FFE2D8' }}>
            {!index ? <Formulario /> : <Registro />}
            <div style={{ display: 'grid', marginLeft: '12.5%' }}>
                <button onClick={signInWithGoogle} className="btn btn-danger bg"><i className="fa-brands fa-google"></i>   Continuar con Google </button>
                <button onClick={signInWithGithub} className="btn btn-dark ba"><i class="fa-brands fa-github"></i>   Continuar con GitHub </button>

                <p onClick={toggleIndex} style={{ marginLeft: '55px' }}>
                    {!index ? "¿Aún no tienes cuenta? Regístrate AQUÍ " : "¿Ya tienes una cuenta?"}
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Auth;