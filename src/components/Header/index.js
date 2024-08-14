import Logo from '../../assets/logoEcit.png'
import Carrinho from '../../assets/Carrinho.svg'

import { useSelector } from 'react-redux'

import { Link  } from 'react-router-dom'

import '../../styles/header.css'

const Header = ({hideCart, hideSearch}) => {

const { cart } = useSelector((state) => state.shop)

const OpenDrawer = () => {
    const e = new CustomEvent('openCart')
    window.dispatchEvent(e)
}

const logoCenterClass = (!hideCart && !hideSearch) ? "" : "justify-content-center";

return (

    <div className='headerFoda'>
    <header className="headerFoda">
        <li className={`list-header d-flex ${logoCenterClass}`}>
            <ul>
                <Link to='/' >
                <button className='btn'>
                    <img src={Logo} id="Logo" />
                </button>
                </Link>
            </ul>

            <ul>
                {!hideSearch && <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <input type="text" class="form-control input-pesquisa" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                </div>    
                    <button class="btn btn-primary bi bi-search" type="button"></button>
                </div>}
            </ul>

            <ul>
                {!hideCart && <button onClick={() => OpenDrawer()} className='btn badge bg-primary' id='btn-carrinho'>
                    <label> <text className='bi bi-cart'></text> {cart.length} Itens</label>
                </button>}
            </ul>
        </li>
    </header>
    </div>
    )
}

export default Header