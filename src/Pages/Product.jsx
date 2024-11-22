import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import Spinner from 'react-bootstrap/Spinner';
import { CartContext } from '../Context/CartContext';

const Product = () => {

    const [galleryImage, setGalleryImage] = useState("");

    const { addToCart } = useContext(CartContext);

    let { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/' + id);
                setProduct(response.data);
                setGalleryImage(response.data.images[0])
            } catch (err) {
                console.log("Error:", err)
            }
        };

        fetchProducts();

    }, [id])

    const productPrice = (parseFloat(product?.price) - (parseFloat(product?.price) * (parseFloat(product?.discountPercentage) / 100))).toFixed(2)

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                {[...Array(fullStars)].map((_, i) => (
                    <Icon.StarFill key={i} color='orange' />
                ))}
                {halfStar && <Icon.StarHalf color='orange' />}
                {[...Array(emptyStars)].map((_, i) => (
                    <Icon.Star key={i} color='orange' />
                ))}
            </div>
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
                        <div className="col-2">
                            <div className="row">
                                {product.images.map((image, i) => (
                                    <div key={i} className="col-12 mb-3">
                                        <div className={`w-100 border border-1 ${galleryImage === image ? 'border-success' : ''} gallery-side`} onClick={() => setGalleryImage(image)}>
                                            <img
                                                src={image}
                                                className='gallery-images'
                                                alt={image}
                                                onError={(e) => e.target.src = `/Assets/images/dummy.png`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-10 p-0">
                            <img
                                src={galleryImage}
                                className='border border-3 gallery-image p-3 rounded'
                                alt={galleryImage}
                                onError={(e) => e.target.src = `/Assets/images/dummy.png`}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ps-lg-3 ps-md-0 ps-0 rounded">
                    {
                        product?.brand &&
                        <h4 className='fw-bold'>{product?.brand}</h4>
                    }
                    <h2 className='text-dark'>{product?.title}</h2>
                    <div>
                        <p>{product.description}</p>
                    </div>
                    <div className='d-flex my-3 align-items-center'>
                        <h6 className='text-dark me-3'><Icon.CurrencyDollar />{productPrice}</h6>
                        <h6 className='text-muted text-decoration-line-through'><Icon.CurrencyDollar />{product?.price}</h6>
                    </div>
                    <div className='d-flex align-items-center text-muted mb-3'>
                        {product?.category} || {product?.sku} || {product?.warrantyInformation}
                    </div>
                    {renderStars(product?.rating)}
                    <span className='mt-4 d-flex align-items-center'><div className={`availability-indicator p-2 me-2 ${product?.availabilityStatus === 'In Stock' ? 'bg-success' : 'bg-danger'}`}></div> - {product?.availabilityStatus}<span className='text-muted ms-2'>({product?.shippingInformation})</span></span>
                    <div className='mt-2'>
                        {
                            product?.stock > 0
                                ?
                                <button onClick={() => addToCart(product, productPrice)} className='btn btn-success w-100 p-2'>
                                    <Icon.Cart3 className='me-3' size={20} />
                                    Add to Cart
                                </button>
                                :
                                <button className='btn btn-muted disabled w-100 p-2'>
                                    Out of Stock
                                </button>
                        }
                    </div>
                    <div className='my-lg-4 my-md-3 my-3'>
                        <span className='fw-bold'>Specifications</span>
                        <ul class="list-group mt-2">
                            <li className="list-group-item">
                                Category - {product?.tags?.map((tag, index) => (
                                    <span key={index}>
                                        {tag}
                                        {index < product.tags.length - 1 && ", "}
                                    </span>
                                ))}
                            </li>
                            <li class="list-group-item">Warranty - {product?.warrantyInformation}</li>
                            <li class="list-group-item">SKU - {product?.sku}</li>
                            <li class="list-group-item">Weight - {product?.weight}</li>
                            <li class="list-group-item">Diamentions - Width({product?.dimensions.width}), Height({product?.dimensions.height}), Depth({product?.dimensions.depth})</li>
                            <li class="list-group-item">Shipping - {product?.shippingInformation}</li>
                            <li class="list-group-item">Return Policy - {product?.returnPolicy}</li>
                            <li class="list-group-item">
                                <img className='info-qr' src={product?.meta?.qrCode} alt={product?.meta?.qrCode} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <h6 className='my-lg-0 my-md-3 my-3 fw-bold'>Reviews</h6>
                <div className='bg-success p-1 rounded mt-lg-3 mt-md-0 mt-0'></div>
                <div className='row mt-2'>
                    {
                        product?.reviews?.map((review, i) => {
                            return (
                                <div className="col-lg-2 col-md-3 col-6 mb-2">
                                    <div className="card p-2" key={i}>
                                        <span className='text-dark fw-bold'>{review.reviewerName}</span>
                                        <span className='text-muted review-email mb-2'>{review.reviewerEmail}</span>
                                        {renderStars(review.rating)}
                                        <div className='card-body'>
                                            {review.comment}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}

export default Product