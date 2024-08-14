import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { requestProducts } from '../../store/modules/shop/actions'

import Header from "../../components/Header"
import ProductCard from "../../components/Products/Card"

import FotoHero from '../../assets/FotoHero.png'

import './style.css'

const Home = () => {

    const { products, loading, error } = useSelector(state => state.shop);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestProducts())
    }, [dispatch])

    if(loading) return <p className='h-100 text-white text-xl d-flex align-items-center justify-content-center'>Carregando...</p>
    if (error) return <p>Erro ao carregar os produtos: {error} </p>

    return(
        <div className="h-100">
            <Header />

            <div className="home-page">
                <div className="row">
                    <div className="col-12 mb-5 mt-5 line-hero">
                        <div className="col-12 hero">
                            <div className="col-4">
                                <h1 className="badge bg-primary title-hero">Compre pelo nosso site</h1>
                            </div>
                            <div className="col-6">
                                <img src={FotoHero} className="img-hero" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 products-body">
                        <h1 className="title-products-body">Produtos</h1>
                            <div className="row products">
                            {products.map( (p) => (
                                <ProductCard product={p} />
                                ))}
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Home