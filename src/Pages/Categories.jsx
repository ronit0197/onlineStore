import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/categories');
                setCategories(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (error) return <p>Error: {error}</p>;

    return (
        <Container className='mt-4 p-3 page-section'>
            <h1 className='fw-medium text-body-tertiary'>Select Category</h1>
            {loading ? (
                <Container className='d-flex justify-content-center align-items-center py-5'>
                    <Spinner animation="grow" size="sm" role="status" className='mx-2'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <Spinner animation="grow" size="sm" role="status" className='mx-2'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <Spinner animation="grow" size="sm" role="status" className='mx-2'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            ) : (
                <div className="row mt-4">
                    {
                        categories.map((category, i) => (
                            <Link to={`/category/` + category.slug} key={i} className="nav-link col-lg-2 m-2">
                                <div className='border border-success border-1 p-3 d-flex align-items-center justify-content-between rounded'>
                                    {category.name}<Icon.CaretRightFill />
                                </div>
                            </Link>
                        ))
                    }
                </div>
            )}
        </Container>
    )
}

export default Categories