// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import reg from '../assets/img/reg.png'
// import Auth from './auth';
// import { auth } from '../../firebase/firebaseConfig';
// import Footer from '../Navegacion/Footer';
// import Navbar from '../Navegacion/Navbar';
// import firebase from 'firebase/compat/app'

// export const Formulario = () => {
	// const [inputCheckBox, changeInputCheck] = useState(true)

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		console.log('Registro Enviado :D');
// 		const nombre = e.target.nombre;
// 		const apellido = e.target.apellido;
// 		const correo = e.target.correo;
// 		const password = e.target.password
// 		console.log(nombre, apellido, correo, password);
// 		firebase.auth().createUserWithEmailAndPassword(correo, password).then((usuarioFirebase) => {
// 			console.log("Usuario creado:", usuarioFirebase);
// 		})
// 	}

	// const handleCheckBox = (e) => {
	// 	changeInputCheck(e.target.value)
	// }

// 	return (
		// <>
		// 	<Navbar />
		// 	<div className="container-fluid">
		// 		<div className="row">
		// 			<div className="col cont cen">
		// 				<img src={reg} />
		// 			</div>
		// 			<div className="col order-5 cont">
		// 				<h1 className="is2">¡REGÍSTRATE!</h1>
		// 				<div className="container">



		// 					<form >
		// 						<div className="col-6">
		// 							<div style={{ margin: '10px 0px 0px 0px' }}>
		// 								<label className="border1">Nombre</label>
		// 								<input className="inpr border"
		// 									type="text"
		// 									name="nombre"
		// 									placeholder=" - - - - - "
		// 									id="nombre"
		// 								/>
		// 							</div>

		// 							<div style={{ margin: '10px 0px 0px 0px' }}>
		// 								<label className="border1">Apellido</label>
		// 								<input className="inpr border"
		// 									type="text"
		// 									name="apellido"
		// 									placeholder=" - - - - -"
		// 									id="apellido"
		// 								/>
		// 							</div>

		// 							<div style={{ margin: '10px 0px 0px 0px' }}>
		// 								<label className="border1">Correo</label>
		// 								<input className="inpr border"
		// 									type="text"
		// 									name="correo"
		// 									placeholder=" - - - - -"
		// 								/>
		// 							</div>

		// 							<div style={{ margin: '10px 0px 0px 0px' }}>
		// 								<label className="border1">Contraseña</label>
		// 								<input className="inpr border"
		// 									type="password"
		// 									placeholder=" * * * * *"
		// 									id="password"
		// 								/>
		// 							</div>

		// 							<div style={{ display: 'grid' }}>
		// 								<div style={{ margin: '10px 5px 0px 0px' }}>
		// 									<label className="border1">Acepta los términos y condiciones</label>
		// 									<br />
		// 									<input className="border"
		// 										type="checkbox"
		// 										value={inputCheckBox}
		// 										onChange={(e) => handleCheckBox(e)}
		// 									/>
		// 								</div>
		// 								<br />
		// 							</div>

		// 							<button type="button" onClick={handleSubmit} className="btn btn-danger" style={{ width: '120px' }}>Registrarme</button>
		// 						</div>
		// 						<br />
		// 					</form>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </>
// 	);
// }

// import React,{ useRef } from "react";
// import { useUserContext } from "../context/userContext";
// import Navbar from '../Navegacion/Navbar';
// import reg from '../assets/img/reg.png'

// const Signup = () => {
//   const emailRef = useRef();
//   const nameRef = useRef();
//   const psdRef = useRef();
//   const { registerUser } = useUserContext();

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const email = emailRef.current.value;
//     const name = nameRef.current.value;
//     const password = psdRef.current.value;
//     if (email && password && name) registerUser(email, password, name);

//   };

//   return (
//     // <div className="form">
//     //   <h2> Registrate</h2>
//     //   <form onSubmit={onSubmit}>
//     //     <input placeholder="Email" type="email" ref={emailRef} />
//     //     <input placeholder="Nombre" type="name" ref={nameRef} />
//     //     <input placeholder="Contraseña" type="password" ref={psdRef} />
//     //     <button type="submit">Enviar</button>
//     //   </form>
//     // </div>
//     <>
// 			<Navbar />
// 			<div className="container-fluid">
// 				<div className="row">
// 					<div className="col cont cen">
// 						<img src={reg} />
// 					</div>
// 					<div className="col order-5 cont">
// 						<h1 className="is2">¡REGÍSTRATE!</h1>
// 						<div className="container">

// 							<form onSubmit={onSubmit}>
// 								<div className="col-6">
// 									<div style={{ margin: '10px 0px 0px 0px' }}>
// 										<label className="border1">Nombre</label>
// 										<input className="inpr border" type="name" placeholder=" - - - - - " ref={nameRef} />
// 									</div>

// 									{/* <div style={{ margin: '10px 0px 0px 0px' }}>
// 										<label className="border1">Apellido</label>
// 										<input className="inpr border"
// 											type="text"
// 											name="apellido"
// 											placeholder=" - - - - -"
// 											id="apellido"
// 										/>
// 									</div> */}

// 									<div style={{ margin: '10px 0px 0px 0px' }}>
// 										<label className="border1">Correo</label>
// 										<input className="inpr border"
// 											type="email" placeholder=" - - - - -" ref={emailRef} />
// 									</div>

// 									<div style={{ margin: '10px 0px 0px 0px' }}>
// 										<label className="border1">Contraseña</label>
// 										<input className="inpr border" type="password" placeholder=" * * * * *" ref={psdRef} />
// 									</div>

// 									<div style={{ display: 'grid' }}>
// 										<div style={{ margin: '10px 5px 0px 0px' }}>
// 											<label className="border1">Acepta los términos y condiciones</label>
// 											<br />
// 											<input className="border"
// 												type="checkbox"
// 												// value={inputCheckBox}
// 												// onChange={(e) => handleCheckBox(e)}
// 											/>
// 										</div>
// 										<br />
// 									</div>

// 									<button type="submit" className="btn btn-danger" style={{ width: '120px' }}>Registrarme</button>
// 								</div>
// 								<br />
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
//   );
// };

// export default Signup;

import React,{ useRef } from "react";
import { useUserContext } from "../context/userContext";
import Navbar from '../Navegacion/Navbar';
import reg from '../assets/img/reg.png';
import '../styles/registro.css';
import Footer from "../Navegacion/Footer";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);

  };

  return (
    <>
		<Navbar/>
		<div className="registro">
			<div className="container-fluid">
				<div className="row" style={{padding: 0}}>
					<img src={reg} className="img_registro"/>
					<div className="col order-5 cont" id="registrate">
						<h1 className="is2">¡REGÍSTRATE!</h1>
						<div className="container">

							<form onSubmit={onSubmit} className="form_registro">
								<div className="col-6" id="cliente">
									<div style={{ margin: '10px 0px 0px 0px' }}>
										<label className="border1">Nombre</label>
										<input className="inpr border" type="name" placeholder=" - - - - - " ref={nameRef} />
									</div>

									<div style={{ margin: '10px 0px 0px 0px' }}>
										<label className="border1">Correo</label>
										<input className="inpr border"
											type="email" placeholder=" - - - - -" ref={emailRef} />
									</div>

									<div style={{ margin: '10px 0px 0px 0px' }}>
										<label className="border1">Contraseña</label>
										<input className="inpr border" 
											type="password" placeholder=" * * * * *" ref={psdRef} />
									</div>

									<div style={{ display: 'grid' }}>
										<div style={{ margin: '10px 5px 0px 0px' }}>
											<label className="border1">Acepta los términos y condiciones</label>
											<br />
											<input className="border"
												type="checkbox"
												// value={inputCheckBox}
												// onChange={(e) => handleCheckBox(e)}
											/>
										</div>
										<br />
									</div>

									<button type="submit" className="btn btn-danger" style={{ width: '120px' }}>Registrarme</button>
								</div>
								<br />
							</form>
						</div>
					</div>
				</div>
			</div>
			</div>
	</>
  );
};

export default Signup;