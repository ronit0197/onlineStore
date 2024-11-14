import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Categories from '../Components/Categories'
import { Container } from 'react-bootstrap'

const Category = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { slug } = useParams()

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/category/' + slug);
                setProducts(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, [slug])

    return (
        <div>
            <Container fluid className='header'>
                <div className="row">
                    <div className="col-12 text-center">
                        <img src="/Assets/Images/category-banner.png" alt="Header_img" className='category_header w-50' />
                    </div>
                </div>
            </Container>
            <Categories products={products} loading={loading} error={error} title="" />
        </div>
    )
}

export default Category