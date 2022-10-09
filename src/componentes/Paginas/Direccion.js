import React, { useState } from "react";

export const Address = () => {
    const [inputAddress, changeAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Direccion enviada :D');
        console.log((inputAddress));
    }

    const handleInputAddress = (e) => {
        changeAddress(e.target.value);
    }

    return (
        <>
            <h1 className="is">Ingresar mi ubicacion</h1>
            <form action="" onSubmit={handleSubmit} className="formulario4">
                <div>
                    <label htmlFor="direccion">Direccion</label>
                    <input
                        type="text"
                        name="direccion"
                        placeholder="Ingresa tu direccion"
                        id="direccion"
                        value={inputAddress}
                        onChange={handleInputAddress}
                    />
                </div>

                <button type="submit">Agregar direccion de entrega</button>
            </form>
        </>
    )
}