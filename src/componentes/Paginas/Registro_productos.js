import React from 'react';
import '../styles/Productos.css'
import productos from '../assets/img/productos.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import imagen from '../assets/img/imagen.png'
import back2 from '../assets/img/back2.png'


const Registro_productos = () => {

    return (
        <>
            <div className='productos'>
                <div className='formulario_products'>
                    <div className='productos_texto'>

                        <img
                            className='imagen_insertar'
                            src={imagen}
                            alt=""
                        />

                        <h1 className='title_productos'>Tu producto</h1>

                        <div>
                            <label>Nombre del producto</label>
                            <input
                                type="text"
                                name="producto"
                                placeholder="Nombre"
                                id="producto"
                            />
                        </div>

                        <div>
                            <label>Tipo de producto</label>
                            <input
                                type="text"
                                name="producto"
                                placeholder="Tipo de producto"
                                id="producto"
                            />
                        </div>

                        <div>
                            <label>Peso aproximado</label>
                            <input
                                type="text"
                                name="producto"
                                placeholder="Peso en gramos"
                                id="producto"
                            />
                        </div>

                        <div>
                            <label>Marca del producto</label>
                            <input
                                type="text"
                                name="producto"
                                placeholder="Marca"
                                id="producto"
                            />
                        </div>

                        <div>
                            <label>Precio por unidad</label>
                            <input
                                type="number"
                                name="producto"
                                placeholder="Precio en pesos"
                                id="producto"
                            />
                        </div>

                        <div>
                            <label>Descripción del producto</label>
                            <input
                                type="text"
                                name="producto"
                                placeholder="Maximo 240 carecteres"
                                id="producto"
                                className='descripcion'
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

                    </div>

                    <Link to='/registro_local'>
                        <img
                            className="back"
                            src={back2}
                            alt=""
                        />
                    </Link>

                    <div id="dos" className='card'>
                        <img
                            className="card-img-bottom"
                            src={productos}
                            alt=""
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Registro_productos