

// Componentes
import Header from "../../components/Header"
import ProductList from "../../components/Products/List"

// ACTIONS
import { setCustomer as setStoreCustomer } from '../../store/modules/shop/actions'
 
// LIBS
import { v1 as uuidv1 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { requestProducts } from '../../store/modules/shop/actions'

import './style.css'

const Checkout = () => {

    const { products, loading, error } = useSelector(state => state.shop);

    const dispatch = useDispatch()
    const [customer, setCustomer] = useState({
        external_id: uuidv1(),
        name: '',
        email: '',
        phoneNumber: '',
        type: 'individual',
    })

    const goToPay = () => {
        dispatch(setStoreCustomer(customer))
    }

    return (
        <div className="h-100">

            <Header hideCart hideSearch/>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                    <div className="box box-left col-12">
                    <h2 className="text-center">Finalizando o pedido</h2>
                    <br/>
                    <br/>

                        <input 
                        type="text" 
                        className="form-control form-control-lg mb-3" 
                        placeholder="Nome Completo" 
                        onChange={(e) => {
                            setCustomer({ ...customer, name: e.target.value })
                        }}
                        />

                        <input 
                        type="text" 
                        className="form-control form-control-lg mb-3" 
                        placeholder="E-mail"
                        onChange={(e) => {
                            setCustomer({ ...customer, email: e.target.value })
                        }} 
                        />

                        <input 
                        type="text" 
                        className="form-control form-control-lg mb-3" 
                        placeholder="Telefone" 
                        onChange={(e) => {
                            setCustomer({ ...customer, phoneNumber: e.target.value })
                        }}
                        />

                    <button onClick={() => goToPay()} className="btn btn-lg col-12 btn-primary mb-4"> Enviar Pedido </button>


                    <a href="/" className="link-page"> Voltar para o menu anterior </a>

                    </div>
                    </div>
                    <div className="col-6">
                        <div className="box box-left col-12 mb-4 box-sidebar">
                            <h3 className='title'>Minha Sacola (9)</h3>
                            <div className="row products">
                                {[1,2,3,4,5,6,7,8,9].map( (p) => (
                                    <ProductList />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Checkout