import * as types from './types'

const initialState = {
    products: [],
    cart: [],
    favorites: [],
    isOpenModal: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {...state, products: action.payload}

        case types.SET_STATEMODAL:
            return {...state, isOpenModal: {state: !state.isOpenModal.state, key: action.payload}}

        case types.ADD_CART:
            localStorage.setItem('cart', JSON.stringify([...state.cart, action.payload]))
            return {...state, cart: [...state.cart, action.payload]}

        case types.REMOVE_CART:
            const filteredCart = state.cart.filter(obj => obj !== action.payload);
            localStorage.setItem('cart', JSON.stringify(filteredCart))
            return {...state, cart: [filteredCart] }

        case types.IMPORT_CART:
            return {...state, cart: action.payload}

        case types.ADD_FAVORITES:
            localStorage.setItem('favorites', JSON.stringify([...state.favorites, action.payload]))
            return {...state, favorites: [...state.favorites, action.payload]}

        case types.REMOVE_FAVORITES:
            const filteredFavorites = state.favorites.filter(obj => obj !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
            return {...state, favorites: [filteredFavorites] }

        case types.IMPORT_FAVORITES:
            return {...state, favorites: action.payload}
    
        default: return state;
    }
}

export default reducer