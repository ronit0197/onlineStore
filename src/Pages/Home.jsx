import React, { useContext } from 'react'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import { ProductContext } from '../Context/ProductContext';

const Home = () => {

  const { products, loading, error } = useContext(ProductContext);

  return (
    <div>
      <Header />
      <Categories products={products} loading={loading} error={error} title="Popular products" />
    </div>
  )
}

export default Home