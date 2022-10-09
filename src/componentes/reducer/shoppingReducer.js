import { TYPES } from "../actions/shoppingAction";
import QbanoEspecial from '../assets/img/QbanoEspecial.jpg'
import QbanoRopa from '../assets/img/QbanoRopa.jpg'
import QbanoHawaiano from '../assets/img/QbanoHawaiano.jpg'

export const shoppingInitialState = {
    products: [
        {
            id: 1,
            price: 12900,
            amount: 0,
            name: "Sándwich Especial",
            img: QbanoEspecial,
        },

        {
            id: 2,
            price: 16900,
            amount: 0,
            name: "Sandwich Ropa Vieja",
            img: QbanoRopa,
        },

        {
            id: 3,
            price: 14900,
            amount: 0,
            name: "Sandwich Hawaiano",
            img: QbanoHawaiano,
        }
    ],
    cart: []
}

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload);

            let itemInCart = state.cart.find((item) => item.id === newItem.id)

            return itemInCart ? { ...state, cart: state.cart.map((item) => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item) } : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }], }
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let delOne = state.cart.find((item) => item.id === action.payload);

            return delOne.quantity > 1 ? { ...state, cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item) } : { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
        }
        case TYPES.REMOVE_ALL_FROM_CART:
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
        case TYPES.CLEAR_CART:
            return shoppingInitialState;
        default:
            return state
    }
}