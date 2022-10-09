import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBIcon,
    MDBTextArea,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import profile1 from '../assets/img/profile1.png'
import profile2 from '../assets/img/profile2.png'
import registro_cliente from '../assets/img/registro_cliente.PNG'

const Chat = () => {
    return (
        <div className="hola">
            <MDBContainer className="py-5">
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="8" lg="6" xl="4">
                        <MDBCard id="chat1" style={{ borderRadius: "15px" }}>
                            <MDBCardHeader
                                className="d-flex justify-content-between align-items-center p-3 bg-dark text-white border-bottom-0"
                                style={{
                                    borderTopLeftRadius: "15px",
                                    borderTopRightRadius: "15px",
                                }}
                            >
                                <MDBIcon fas icon="angle-left" />
                                <p className="mb-0 fw-bold">Chat de soporte</p>
                                <Link to='/'>
                                    <MDBIcon fas icon="times" style={{ color: "white" }} />
                                </Link>
                            </MDBCardHeader>

                            <MDBCardBody>
                                <div className="d-flex flex-row justify-content-start mb-4">
                                    <img
                                        src={profile1}
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }}
                                    />
                                    <div
                                        className="p-3 ms-3"
                                        style={{
                                            borderRadius: "15px",
                                            backgroundColor: "#E4D1FF",
                                        }}>
                                        <p className="small mb-0">
                                            Hola bienvienido al chat de soporte, ¿Necesitas ayuda en algo?.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-end mb-4">
                                    <div
                                        className="p-3 me-3 border"
                                        style={{ borderRadius: "15px", backgroundColor: "#D3FFDB" }}>
                                        <p className="small mb-0">
                                            Muchas gracias, es que nose como registrarme como cliente.
                                        </p>
                                    </div>
                                    <img
                                        src={profile2}
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }} />
                                </div>

                                <div className="d-flex flex-row justify-content-start mb-4">
                                    <img
                                        src={profile1}
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }}
                                    />
                                    <div className="ms-3" style={{ borderRadius: "15px" }}>
                                        <div className="bg-image">
                                            <img
                                                src={registro_cliente}
                                                style={{ borderRadius: "15px", width: "100%" }}
                                                alt="video"
                                            />
                                            <a href="#!">
                                                <div className="mask"></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-row justify-content-start mb-4">
                                    <img
                                        src={profile1}
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }}
                                    />
                                    <div
                                        className="p-3 ms-3"
                                        style={{
                                            borderRadius: "15px",
                                            backgroundColor: "#E4D1FF",
                                        }}
                                    >
                                        <p className="small mb-0">Asi deberias visualizar el registro, si le oprimes en registro.</p>
                                    </div>
                                </div>

                                <MDBTextArea
                                    className="form-outline"
                                    label="Escribe un mensaje"
                                    id="textAreaExample"
                                    rows={4}
                                />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Chat