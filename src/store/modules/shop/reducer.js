import { produce } from 'immer'
import types from './types'

const INITIAL_STATE = {
    customer: {},
    products: [],
    cart: [],
};

function shop(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SET_CUSTOMER: {
            return produce(state, draft => {
                draft.customer = action.customer;
            });
        }
        case types.REQUEST_PRODUCTS:
            return { ...state, loading: true };
        case types.SET_PRODUCTS:
            return { ...state, products: action.payload, loading: false };
        case types.TOGGLE_CART: {
            return produce(state, (draft) => {
                const index = draft.cart.findIndex((p) => p._id === action.product._id)
                if (index !== -1) {
                    draft.cart.splice(index, 1)
                } else {
                    draft.cart.push(action.product)
                }
            })
        }
        case types.FETCH_FAILED:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}


export default shop