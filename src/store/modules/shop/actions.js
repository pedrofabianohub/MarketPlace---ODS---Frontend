import types from "./types"

export function setCustomer(customer){
    return { type: types.SET_CUSTOMER, customer }
}

export const requestProducts = () => ({
    type: types.REQUEST_PRODUCTS
});

export const setProducts = products => ({
    type: types.SET_PRODUCTS,
    payload: products
});

export function toogleCart (product) {
    return { type: types.TOGGLE_CART, product }
}

export const fetchFailed = error => ({
    type: types.FETCH_FAILED,
    payload: error
});