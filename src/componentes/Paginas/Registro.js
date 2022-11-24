import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import {GoogleAuthProvider,signInWithPopup,} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
// import Footer from "../Navegacion/Footer";
import Navbar from '../Navegacion/Navbar'
import login from '../assets/img/login.jpg'
import rappi from '../assets/img/rappi.png'

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser} = useUserContext();

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const handleGoogleSignIn = async () => {
    await loginWithGoogle()
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  return (
    <>
    	<Navbar/>
		<div className="inicio_sesion">
		<div className="container-fluid" style={{ background: '#ffe2d8' }}>
					<div className="row">
						<div className="col" id="inicio">
							<img className="img2" src={rappi} />
							<h1 className="is">Iniciar Sesion</h1>
							<form action="" onSubmit={onSubmit} className="form">

								<div className="row" id="pd">
									<div className="col-6 cen" style={{ display: 'grid', justifyContent: 'center' }}>
										<div>
											<label className="border1">Correo electronico</label>
											<input className="inp border"
												type="text"
												name="nombre"
												placeholder=" - - - - -"
												ref={emailRef}
											/>
										</div>


										<div style={{ margin: '10px 0px 0px 0px' }}>
											<label className="border1">Contraseña</label>
											<input className="inp border"
												type="password"
												name="correo"
												placeholder=" * * * * *"
												ref={psdRef}
											/>
										</div>
										<br /><br />
										<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
											<button type="submit" className="btn btn-secondary" style={{ width: '100px', marginRight: '5px' }}>Iniciar</button>
											<button type="submit" className="btn btn-danger" style={{ width: '100px' }}>Regresar</button>
										</div>
									</div>
									<p style={{ marginTop: '30px' }}>ó</p>
									<div className="centro">
										<button 
											onClick={handleGoogleSignIn} 
											className=" btn-danger" 
											id="google">Iniciar sesión con Google</button>
									</div>
								</div>
							</form>
						</div>
						<img className="img_login" src={login} />
					</div>
				</div>
		</div>
    </>
  );
};

export default Signin;