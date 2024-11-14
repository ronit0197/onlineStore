import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Popular = () => {
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
        <Container className='bg-light my-3 p-3'>
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
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        categories.map((category, i) => (
                            <SwiperSlide className='card border border-0'>
                                <Link to={`/category/` + category.slug} key={i} className="nav-link slider-link">
                                    {category.name}
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            )}
        </Container>
    )
}

export default Popular