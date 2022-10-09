import React, { useReducer } from 'react'
import { TYPES } from '../actions/shoppingAction';
import { shoppingInitialState, shoppingReducer } from '../reducer/shoppingReducer';
import CartItem from './cartItem';
import ProductItem from './productItem';
import Navbar from '../Navegacion/Navbar'
import Footer from '../Navegacion/Footer'

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { products, cart } = state

    const addToCart = (id) => {
        console.log(id);
        dispatch({ type: TYPES.ADD_TO_CART, payload: id })
    }
    const delFromCart = (id, all = false) => {
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
        }
        else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
        }
    }
    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
    }

    return (
        <>
            <div style={{ background: '#FFE2D8' }}>
                <Navbar />
                <br />
                <h1 style={{ color: '#FF5C00', fontWeight: 'bold', fontSize: '40px', textAlign: 'left', marginLeft: '30px' }}>Carrito</h1>
                <h3 style={{ color: '#494949', fontWeight: 'bold', fontSize: '35px', textAlign: 'left', marginLeft: '30px' }}>Productos</h3>
                <article className="box grid-responsive">
                    {products.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart} />))}
                </article>
                <h3 style={{ color: '#494949', fontWeight: 'bold', fontSize: '35px', textAlign: 'left', marginLeft: '30px' }}>Carrito</h3>
                <article className="box">
                    <button className="btn btn-success" onClick={clearCart}>Limpiar carrito</button>
                    <br />
                    {cart.map((item, index) => (<CartItem key={index} data={item} delFromCart={delFromCart} />))}
                </article>
            </div>
            <Footer />
        </>
    )
}

export default ShoppingCart