import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import axios from 'axios';

const Women = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/women's clothing`);
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header title="Exclusive women's clothings" image="/Assets/Images/women.png" />
      <Categories products={products} loading={loading} error={error} title="Women's collection" />
    </div>
  )
}

export default Women