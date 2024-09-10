import Home from './Pages/Home';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './Style/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './Context/ProductContext';
import Product from './Pages/Product';

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
