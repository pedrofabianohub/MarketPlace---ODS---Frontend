import { all } from 'redux-saga/effects'

import shopSaga from './shop/sagas'

export default function* rootSaga(){
    return yield all([
        shopSaga()
    ])
}