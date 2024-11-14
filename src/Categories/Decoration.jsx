import React, { useEffect, useState } from 'react'
import Categories from '../Components/Categories';
import axios from 'axios';

const Decoration = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/category/home-decoration');
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
        <Categories products={products} loading={loading} error={error} title="Decoration" />
    )
}

export default Decoration