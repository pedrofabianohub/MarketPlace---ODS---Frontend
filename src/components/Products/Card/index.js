import coxinha from '../../../assets/coxinha.png';
import './style.css';

import { useDispatch, useSelector } from 'react-redux';
import { toogleCart } from '../../../store/modules/shop/actions'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.shop)
    const added = cart.findIndex((p) => p._id === product._id) !== -1

    return (
        <div className="product col-2 mb-4">
            <img src={product.capa} className="img-fluid align-center" alt={product.nome} />
            <div>
                <h5> {product.nome} </h5>
            </div>
            <div className='titleWithButton d-flex justify-content-between align-items-center'>
                <h4>
                    <label className='badge bg-primary text-white'>R$ {product.preco}</label>
                </h4>
                <div className='btn-addCard'>
                <button onClick={() => dispatch(toogleCart(product))} className={`btn btn-${added ?'danger':'primary'} btn-sm`}> {added ? '-' : '+'} </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
