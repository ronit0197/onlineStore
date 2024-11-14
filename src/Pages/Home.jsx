import React, { useContext } from 'react'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import { ProductContext } from '../Context/ProductContext';
import Beauty from '../Categories/Beauty';
import Furniture from '../Categories/Furniture';
import Laptop from '../Categories/Laptop';
import Popular from '../Components/Popular';
import Decoration from '../Categories/Decoration';

const Home = () => {

  const { products, loading, error } = useContext(ProductContext);

  return (
    <div>
      <Header title="Exclusive offers for you" image="/Assets/Images/header.png" />
      <Categories products={products} loading={loading} error={error} title="Popular products" />

      {/* Popular Categories */}
      <Beauty />
      <Furniture />
      <Laptop />
      <Popular />
      <Decoration />
    </div>
  )
}

export default Home