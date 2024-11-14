import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Categories from '../Components/Categories';

const Furniture = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/category/furniture');
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
        <Categories products={products} loading={loading} error={error} title="Furnitures" />
    )
}

export default Furniture