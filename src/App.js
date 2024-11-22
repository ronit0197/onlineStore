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
import { AuthProvider } from './Context/AuthContext';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Account from './Pages/Auth/Account';
import Orders from './Pages/Auth/Orders';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/category/:slug' element={<Category />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/account' element={<Account />} />
              <Route path='/orders' element={<Orders />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
