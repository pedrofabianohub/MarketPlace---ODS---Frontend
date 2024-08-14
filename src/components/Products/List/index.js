import { useDispatch } from 'react-redux'
import { toogleCart } from '../../../store/modules/shop/actions'

import Coxinha from '../../../assets/coxinha.png'

import './style.css'

const ProductList = ({ product }) => {

    const dispatch = useDispatch()

    return (
        <div className="product-list col-12">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-3">
                    <img src={product.capa} className="img-fluid" />
                </div>
                <div className="col-6">
                    <h6>
                        <span className='badge bg-primary'>R$ {product.preco}</span>
                    </h6>
                    <small>
                        <bold>{product.nome}</bold>
                    </small>
                </div>
                <div className="col-3">
                        <button onClick={() => dispatch(toogleCart(product))} className="btn btn-danger rounded-circle text-center">-</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductList