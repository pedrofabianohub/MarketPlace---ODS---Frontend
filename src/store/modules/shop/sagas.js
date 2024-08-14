import { takeLatest, all, call, put } from 'redux-saga/effects';
import types from './types';
import api from '../../../services/api';
import { setProducts } from './actions';

export function* requestProducts() {
    try {
        const response = yield call(api.get, '/');
        console.log('API Response:', response);
        const products = response.data.loja.products;
        yield put(setProducts(products));
    } catch (error) {
        console.error('Failed to fetch products', error);
    }
}

function* watchRequestProducts() {
    yield takeLatest(types.REQUEST_PRODUCTS, requestProducts);
}

export default function* rootSaga() {
    yield all([
        watchRequestProducts(),
    ]);
}
