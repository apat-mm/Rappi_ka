import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainApp from './componentes/Navegacion/MainApp';
import { UserContextProvider } from "./componentes/context/userContext";
import App1 from './componentes/Paginas/App1';

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <UserContextProvider>
                    <MainApp />
                    {/* <App1/> */}
                </UserContextProvider>
            </BrowserRouter>
        </div>
    );
}
