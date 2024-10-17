import Home from './Pages/Home';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './Style/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './Context/ProductContext';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Jewelery from './Pages/Jewelery';
import Contact from './Pages/Contact';
import Checkout from './Pages/Checkout';
import CartProvider from './Context/CartContext';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women />} />
            <Route path='/jewelery' element={<Jewelery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/product/:id' element={<Product />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
