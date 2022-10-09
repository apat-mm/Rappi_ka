import React from 'react';
import '../styles/Qbanoc.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import img_qbano from '../assets/img/qbano.png';
import QbanoEspecial from '../assets/img/QbanoEspecial.jpg';
import QbanoHawaiano from '../assets/img/QbanoHawaiano.jpg';
import QbanoRopa from '../assets/img/QbanoRopa.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa';
import back2 from '../assets/img/back2.png'
import { Link } from 'react-router-dom';
import Navbar from '../Navegacion/Navbar';
import Footer from '../Navegacion/Footer';

const Qbano = () => {
    return (
        <>
            <Navbar />
            <div className='Qbano'>
                <div className='container'>
                    <div className='row mt-5'>

                        <div className='col-4'>
                            <div
                                id='uno'
                                className='card'
                                style={{ color: "white", backgroundColor: "white" }}
                            >
                                <img
                                    className="Card image cap"
                                    src={img_qbano}
                                    alt=""
                                />
                            </div>
                            <div className='restaurante'>
                                <h1 className='tituloRest'>Sandwich Qbano</h1>
                                <p className='parrafo'>Calificación   4.7
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                </p>
                                <label className='descripcion_qbano'>Menú y precios</label>
                                <p className='combos'>Promociones</p>
                                <p className='combos'>Sándwiches</p>
                                <p className='combos'>Bowls</p>
                                <p className='combos'>Ensaladas</p>
                                <p className='combos'>Ensaladas</p>
                                <p className='combos'>Wraps</p>
                                <p className='combos'>Bebidas</p>
                                <Link to="/">
                                    <img
                                        src={back2}
                                        className="back3"
                                    />
                                </Link>
                                <p className='combos1'>Combos</p>

                            </div>
                        </div>

                        <div
                            className='col-6 offset-md-1'
                            id='dos'>
                            <h2> <font color="#FF8351">Sándwiches</font> </h2>

                            <div className='productos'>
                                <img
                                    src={QbanoEspecial}
                                    alt=""
                                    className='imagen_san'
                                />
                                <label className='titulos_san'>Sandwich Personal Supremo</label>
                                <p className='texto_san'>Pechuga de Pavo, Tocineta, Queso Mozzarella.</p>
                                <label className='precios'>$ 17.900</label>
                                <FontAwesomeIcon
                                    icon={faCirclePlus}
                                    transform="right-10"
                                    color="#FF8351"
                                    size='7px'
                                />
                            </div>

                            <div className='productos'>
                                <img
                                    src={QbanoHawaiano}
                                    alt=""
                                    className='imagen_san'
                                />
                                <label className='titulos_san'>Sandwich Hawaiano</label>
                                <p className='texto_san'>Jamón de Cerdo con Piña Calada, Queso Mozzarella y Mayonesa.</p>
                                <label className='precios'>$ 14.900</label>
                                <FontAwesomeIcon
                                    icon={faCirclePlus}
                                    transform="right-10"
                                    color="#FF8351"
                                    size='7px'
                                />
                            </div>

                            <div className='productos'>
                                <img
                                    src={QbanoRopa}
                                    alt=""
                                    className='imagen_san'
                                />
                                <label className='titulos_san'>Sandwich Ropa Vieja</label>
                                <p className='texto_san'>Carne de Res Desmechada con Queso Amarillo, Lechuga Batavia, Tomate.</p>
                                <label className='precios'>$ 23.900</label>
                                <FontAwesomeIcon
                                    icon={faCirclePlus}
                                    transform="right-10"
                                    color="#FF8351"
                                    size='7px'
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Qbano