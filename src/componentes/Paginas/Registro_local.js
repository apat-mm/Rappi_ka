import React, { useState } from 'react';
import img_local from '../assets/img/registro_local.png'
import '../styles/local.css'
import insert_image from '../assets/img/insert_image.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/fontawesome-free-brands'
import { faTwitter } from "@fortawesome/fontawesome-free-brands";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import logo from '../assets/img/logo.png'
import back2 from '../assets/img/back2.png'

export const Local = () => {
	const [inputLocalName, changeInputLocal] = useState('');
	const [inputTypePerson, changeInputType] = useState('');
	const [inputId, changeInputId] = useState('');
	const [inputAmountLocals, changeInputAmount] = useState('');
	const [inputCorreo, changeInputCorreo] = useState('');
	const [inputContraseña, changeInputContraseña] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Registro del local Enviado :D');
		console.log((inputLocalName));
		console.log((inputTypePerson));
		console.log((inputId));
		console.log((inputAmountLocals));
		console.log((inputContraseña));
	}

	const handleInputLocal = (e) => {
		changeInputLocal(e.target.value);
	}

	const handleInputType = (e) => {
		changeInputType(e.target.value);
	}

	const handleInputId = (e) => {
		changeInputId(e.target.value);
	}

	const handleAmount = (e) => {
		changeInputAmount(e.target.value);
	}

	const handleInputCorreo = (e) => {
		changeInputCorreo(e.target.value);
	}

	const handleContraseña = (e) => {
		changeInputContraseña(e.target.value);
	}

	return (
		<>
			<div className='local'>
				<form action="" onSubmit={handleSubmit} className="formulario3">

					<div id="dos" className='card'>
						<img
							className="card-img-top"
							src={img_local}
							alt=""
						/>
					</div>

					<div className='contenedor_texto'>

						<img
							src={logo}
							alt=""
							className='insert_img2'
						/>

						<h1 className="text_local">Registra tu local</h1>



						<div>
							<label htmlFor="local">Nombre del Local</label>
							<input
								type="text"
								name="local"
								placeholder="Nombre del local"
								id="local"
								value={inputLocalName}
								onChange={handleInputLocal}
							/>
						</div>

						<div>
							<label htmlFor="persona">Tipo de persona</label>
							<input
								type="text"
								name="persona"
								placeholder="Escribir persona natural o juridica"
								id="persona"
								value={inputTypePerson}
								onChange={handleInputType}
							/>
						</div>

						<div>
							<label htmlFor="id">Identificacion del propietario</label>
							<input
								type="number"
								name="id"
								placeholder="Ingresar el numero de identificacion"
								id="id"
								value={inputId}
								onChange={handleInputId}
							/>
						</div>

						<div>
							<label htmlFor="amount">Ingresar la cantidad de locales activos</label>
							<input
								type="number"
								name="amount"
								placeholder="Numero de locales"
								id="amount"
								value={inputAmountLocals}
								onChange={handleAmount}
							/>
						</div>

						<div>
							<label>Redes sociales</label>
							<div className='redes'>
								<FontAwesomeIcon
									icon={faTwitter}
									size="2x"
									className='social'
								/>
								<FontAwesomeIcon
									icon={faInstagram}
									transform="right-8"
									size="2x"
									className='social'
								/>
								<FontAwesomeIcon
									icon={faFacebook}
									transform="right-18"
									size="2x"
									className='social'
								/>
							</div>
						</div>

						<div>
							<label>Añade tus productos</label>
							<Link to='/registro_producto'>
								<img
									src={insert_image}
									alt=""
									className='insert_img'
								/>
							</Link>

							<Link to='/registro_producto'>
								<img
									src={insert_image}
									alt=""
									className='insert_img1'
								/>
							</Link>
						</div>

						<div>
							<label htmlFor="correo">Correo</label>
							<input
								type="text"
								name="correo"
								placeholder="Correo"
								id="correo"
								value={inputCorreo}
								onChange={handleInputCorreo}
							/>
						</div>

						<div>
							<label htmlFor="contraseña">Contraseña</label>
							<input
								type="text"
								name="contraseña"
								placeholder="Ingresa una contraseña"
								id="contraseña"
								value={inputContraseña}
								onChange={handleContraseña}
							/>
						</div>

						<label>Terminos y condiciones de venta del producto</label>
						<p className='terminos'>
							<div>
								<FontAwesomeIcon
									icon={faSquareCheck}
									size="1x"
								/>
								<span className="holi">
									Acepto los términos y condiciones y a la vez el manejo de datos de mi producto
								</span>
							</div>
						</p>


						<button type="submit" className='boton_local'>Registrar local</button>

						<Link to="/">
							<img
								className="atras"
								src={back2}
								alt=""
							/>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}