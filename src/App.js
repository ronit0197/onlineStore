import Home from './Pages/Home';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './Style/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './Context/ProductContext';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Checkout from './Pages/Checkout';
import Category from './Pages/Category';
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
            <Route path='/contact' element={<Contact />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/category/:slug' element={<Category />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
