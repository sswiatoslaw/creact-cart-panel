import * as types from './types'

export const addProducts = (products)  => ({
    type: types.GET_PRODUCTS,
    payload: products
})

export const setStateModal = (key) => ({
    type: types.SET_STATEMODAL,
    payload: key
})

export const addCart = (key) => ({
    type: types.ADD_CART,
    payload: key
})

export const removeCart = (key) => ({
    type: types.REMOVE_CART,
    payload: key
})


export const importCart = (obj) => ({
    type: types.IMPORT_CART,
    payload: obj
})

export const addFavorites = (key) => ({
    type: types.ADD_FAVORITES,
    payload: key
})

export const removeFavorites = (key) => ({
    type: types.REMOVE_FAVORITES,
    payload: key
})


export const importFavorites = (obj) => ({
    type: types.IMPORT_FAVORITES,
    payload: obj
})

