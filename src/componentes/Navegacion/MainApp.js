import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Paginas/Home';
import Auth from '../Paginas/auth'
import Local_register from '../Paginas/Local_register';
import { Repartidor } from '../Paginas/Registro_rep';
import Chat from '../Paginas/Chat';
import Qbano from '../Paginas/Qbano';
import Locales_dom from '../Paginas/Locales';
import ShoppingCart from '../../componentes/ItemCart/shoppingCart'
import Registro_productos from '../Paginas/Registro_productos';
import App1 from '../Paginas/App1';
import App2 from '../Paginas/App2';
import Crud_admin from '../Paginas/Crud_admin';

const MainApp = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registro' element={<App1 />} />
                <Route path='/registro_local' element={<Local_register />} />
                <Route path='/registro_repar' element={<Repartidor />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/Qbano' element={<Qbano />} />
                <Route path='/locales' element={<Locales_dom />} />
                <Route path='/cart' element={<ShoppingCart />} />
                <Route path='/registro_producto' element={<Registro_productos />} />
                <Route path='/admin' element={<App2 />} />
                <Route path='/crud_admin' element={<Crud_admin />} />
            </Routes>
        </>
    );
}

export default MainApp;