import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/global.css';

// Components
import Sidebar from './components/Sidebar';

// Pages
import Cadastro from './pages/Cadastro';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Sidebar /> 
    </BrowserRouter>
  );
}

export default AppRoutes;
