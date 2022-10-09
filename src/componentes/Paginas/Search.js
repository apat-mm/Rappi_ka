import React, { useState } from "react";

export const Search = () => {
    const [isearch, setisearch] = useState('');

    const handleSub = (e) => {
        e.preventDefault();

        console.log('Busqueda realizada :D');
        console.log((isearch));
    }

    const handleOnChange = (e) => {
        setisearch(e.target.value);
    }

    return (
        <>
            <form action="" onSubmit={handleSub} className="formulario1">
                <div>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Buscar en Rappi..."
                        id="nombre"
                        value={isearch}
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit"> Buscar </button>
                <h1 className="is1">Mostrar resultados para: {isearch}</h1>
            </form>
        </>
    )
}