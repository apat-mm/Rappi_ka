import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reg from '../assets/img/reg.png'
import Auth from './auth';
import { auth } from '../../firebase/firebaseConfig';
import Footer from '../Navegacion/Footer';
import Navbar from '../Navegacion/Navbar';

export const Formulario = () => {
	const [inputCheckBox, changeInputCheck] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Registro Enviado :D');
		const nombre = e.target.nombre.value;
		const apellido = e.target.apellido.value;
		const correo = e.target.correo.value;
		const password = e.target.password.value
		console.log(nombre, apellido, correo, password);
		auth.auth().createUserWithEmailAndPassword(correo, password).then((usuarioFirebase) => {
			console.log("Usuario creado:", usuarioFirebase);
		})
	}

	const handleCheckBox = (e) => {
		changeInputCheck(e.target.checked)
	}

	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col cont cen">
						<img src={reg} />
					</div>
					<div className="col order-5 cont">
						<h1 className="is2">¡REGÍSTRATE!</h1>
						<div className="container">



							<form onSubmit={handleSubmit}>
								<div className="col-6">
									<div style={{ margin: '10px 0px 0px 0px' }}>
										<label className="border1">Nombre</label>
										<input className="inpr border"
											type="text"
											name="nombre"
											placeholder=" - - - - - "
											id="nombre"
										/>
									</div>

									<div style={{ margin: '10px 0px 0px 0px' }}>
										<label className="border1">Apellido</label>
										<input className="inpr border"
											type="text"
											name="apellido"
											placeholder=" - - - - -"
											id="apellido"
										/>
									</div>

									<div style={{ margin: '10px 0px 0px 0px' }}>
										<label className="border1">Correo</label>
										<input className="inpr border"
											type="text"
											name="correo"
											placeholder=" - - - - -"
										/>
									</div>

									<div style={{ margin: '10px 0px 0px 0px' }}>
										<label className="border1">Contraseña</label>
										<input className="inpr border"
											type="password"
											placeholder=" * * * * *"
											id="password"
										/>
									</div>

									<div style={{ display: 'grid' }}>
										<div style={{ margin: '10px 5px 0px 0px' }}>
											<label className="border1">Acepta los términos y condiciones</label>
											<br />
											<input className="border"
												type="checkbox"
												value={inputCheckBox}
												onChange={handleCheckBox}
											/>
										</div>
										<br />
									</div>

									<button type="button" className="btn btn-danger" style={{ width: '120px' }}>Registrarme</button>
								</div>
								<br />
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}