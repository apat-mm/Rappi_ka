import React from "react";
import card_restaurante from '../assets/img/card_restaurante.png'
import card_comercio from '../assets/img/card_comercio.png'
import card_repartidor from '../assets/img/card_repartidor.png'
import '../styles/tarjetas.css'
import { Link } from 'react-router-dom';

function Card() {
    return (
        <div className="tarjetas">

            <div className="container justify-content-center">

                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center">
                            <img
                                className="card-img-top"
                                src={card_restaurante}
                                alt=""
                            />
                            <div className="card-body">
                                <h4 className="card-title">REGISTRA TU RESTAURANTE</h4>
                                <div className="texto">
                                    <p className="card-text text-secondary">Descubre todos los beneficios que tenemos para ofrecerte.</p>
                                </div>
                            </div>

                            <div className="card-footer">
                                <Link to='/registro_local'>
                                    <div className="boton_registrar">
                                        <a href="#!" className="btn btn-outline-light">¡Registrate!</a>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center">
                            <img
                                className="card-img-top"
                                src={card_comercio}
                                alt=""
                            />
                            <div className="card-body">
                                <h4 className="card-title">REGISTRA TU COMERCIO</h4>
                                <div className="texto">
                                    <p className="card-text text-secondary">Accede a miles de usuarios y disfruta de una logística inmediata sin salir de tu tienda.</p>
                                </div>
                            </div>

                            <div className="card-footer">
                                <Link to="/registro_local">
                                    <div className="boton_registrar">
                                        <a href="#!" className="btn btn-outline-light">¡Registrate!</a>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center">
                            <img
                                className="card-img-top"
                                src={card_repartidor}
                                alt=""
                            />
                            <div className="card-body">
                                <h4 className="card-title">¡SÉ REPARTIDOR!</h4>
                                <div className="texto">
                                    <p className="card-text text-secondary">Gana dinero extra entregando domicilios, tenemos las mejores tarifas y beneficios.</p>
                                </div>
                            </div>

                            <div className="card-footer">
                                <Link to="/registro_repar">
                                    <div className="boton_registrar">
                                        <a href="#!" className="btn btn-outline-light">¡Registrate!</a>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Card