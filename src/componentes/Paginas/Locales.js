import React from "react";
import '../styles/Locales.css'
import LocalQbano from '../assets/img/LocalQbano.png'
import LocalRebaja from '../assets/img/LocalRebaja.png'
import LocalAlkosto from '../assets/img/LocalAlkosto.png'
import LocalBBC from '../assets/img/LocalBBC.png'
import { Link } from "react-router-dom";
import Navbar from "../Navegacion/Navbar";
import Footer from "../Navegacion/Footer";

const Locales_dom = () => {
    return (
        <>
            <Navbar />
            <div className="locales_dom">
                <div className="container" id="contenedor">
                    <div className="row">
                        <h2 className="locales_tit"> <font color="#FF8351">Locales a domicilio</font> </h2>
                        <div className="col-6" id="columna1">

                            <img
                                src={LocalBBC}
                                alt=""
                                className="local_BBC"
                            />
                        </div>

                        <div className="col-6" id="columna2">
                            <Link to='/Qbano'>
                                <img
                                    src={LocalQbano}
                                    alt=""
                                    className="local_qbano" />
                            </Link>
                        </div>


                        <div className="col-6" id="columna3">
                            <img
                                src={LocalAlkosto}
                                alt=""
                                className="local_alkosto"
                            />
                        </div>

                        <div className="col-6" id="columna4">
                            <img
                                src={LocalRebaja}
                                alt=""
                                className="local_qbano"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Locales_dom