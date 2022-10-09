import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainApp from './componentes/Navegacion/MainApp';
import { UserContextProvider } from "./componentes/context/userContext";

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <UserContextProvider>
                    <MainApp />
                </UserContextProvider>
            </BrowserRouter>
        </div>
    );
}
