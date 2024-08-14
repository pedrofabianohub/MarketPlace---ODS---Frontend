import './style.css';
import { Dock } from 'react-dock';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch, UseSelector } from 'react-redux'
import { requestProducts } from '../../store/modules/shop/actions'
import ProductList from '../Products/List';

import { Link } from 'react-router-dom';

const Sidebar = () => {

    const {cart} = useSelector((state) => state.shop)

    const total = cart.reduce((total, product) => {
        return total + (Number(product.preco) || 0)
    }, 0)

    const [opened, setOpened] = useState(false);

    const { products, loading, error } = useSelector(state => state.shop);

    useEffect(() => {

        const handleOpenCart = () => {
            setOpened(true);
        };

        window.addEventListener('openCart', handleOpenCart);

        return () => {
            window.removeEventListener('openCart', handleOpenCart);
        };
    }, []);

    const closeSideBar = () => {
        setOpened(false)
    }

    return (
        <Dock
            position='right'
            isVisible={opened}
            onVisibleChange={(visible) => setOpened(visible)}
            size={0.35}
        >
            <div className='container-fluid h-100 pt-4 sidebar'>
                <h5 className='mb-2'>Meu Carrinho ({cart.length})</h5>

                <div className='row products'>
                    {cart.map((p) => (
                        <ProductList product={p} />
                    ))}
                </div>
                
                <div className='row footer aling-items-end'>
                    <div className='col-12 d-flex justify-content-between align-items-center'>
                        <b className='d-inline-block'>Total</b>
                        <h3 className='d-inline-block'>{ total.toFixed(2) }</h3>
                    </div>
                    <Link to='/checkout' className='p-0'><button onClick={() => closeSideBar()} className='col-12 btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center'>Finalizar compra</button></Link>
                </div>
            </div>
        </Dock>
    );
}

export default Sidebar;
