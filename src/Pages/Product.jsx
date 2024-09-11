import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import Spinner from 'react-bootstrap/Spinner';

const Product = () => {

    let { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/' + id);
                setProduct(response.data);
            } catch (err) {
                console.log("Error:", err)
            }
        };

        fetchProducts();

    }, [id])

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <Icon.StarFill key={i} color='orange' />
                ))}
                {halfStar && <Icon.StarHalf color='orange' />}
                {[...Array(emptyStars)].map((_, i) => (
                    <Icon.Star key={i} color='orange' />
                ))}
            </>
        );
    };

    if (!product) {
        return (
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
        );
    }

    return (
        <Container>
            <div className="row p-4">
                <div className="col-lg-6 mb-lg-0 mb-md-3 mb-3 img-sec">
                    <div className="row">
                        <div className="col-lg-10 col-md-12 col-12 p-0">
                            <img
                                src={product.image}
                                className='border border-3 w-100 p-3 rounded'
                                alt='product-image'
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-lg-4 p-md-3 p-3 rounded">
                    <h1 className='fw-bold'>{product.title}</h1>
                    <div>
                        <p>{product.description}</p>
                    </div>
                    <div className='d-flex my-4 align-items-center'>
                        <h2 className='me-3'>₹ {product.price}</h2>
                        {renderStars(product.rating.rate)}
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-success w-100 p-2'>
                            <Icon.Cart3 className='me-3' size={20} />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Product