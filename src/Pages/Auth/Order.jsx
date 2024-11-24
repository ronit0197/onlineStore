import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { db } from '../../Database/Firebase';
import { Container, Spinner } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { useAuth } from '../../Context/AuthContext';


const fetchOrderById = async (orderId) => {
    try {
        const orderRef = doc(db, 'orders', orderId);
        const orderSnap = await getDoc(orderRef);

        if (orderSnap.exists()) {
            const orderData = { id: orderSnap.id, ...orderSnap.data() };
            return orderData;
        } else {
            console.log('No such order found!');
            return null;
        }
    } catch (error) {
        console.error('Error fetching order:', error);
        return null;
    }
};


const Order = () => {

    let { id } = useParams();

    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const [order, setOrder] = useState(null);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
        });
    };

    const gst = 0.25;
    const shipping = 50;

    useEffect(() => {
        const getOrder = async () => {
            const fetchedOrder = await fetchOrderById(id);
            setOrder(fetchedOrder);
        };

        getOrder();
    }, [id]);

    useEffect(() => {

        if (currentUser === null) {
            navigate('/login')
        }

    }, [currentUser, navigate])

    return (
        <Container className='mt-4 p-3 page-section'>
            <h3 className='text-secondary mb-3'>Order details</h3>
            {
                order === null
                    ?
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
                    :
                    <>
                        <div className='border border-1 p-3 rounded shadow'>
                            <div className='border-bottom border-1 mb-2'>
                                <p className='order-font fw-medium text-body-tertiary fs-6'>Order Id: {order.id}</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 mb-lg-0 mb-md-3 mb-3">
                                    <section>
                                        <span className='fw-medium'>Address:</span>
                                        <p>{order.address.address}</p>
                                    </section>
                                    <section className='mb-1'>
                                        <span className='fw-medium'>Name: {order.address.name}</span>
                                    </section>
                                    <section className='mb-1'>
                                        <span className='fw-medium'>Email: {order.address.email}</span>
                                    </section>
                                    <section>
                                        <span className='fw-medium'>Phone No: {order.address.phoneNo}</span>
                                    </section>
                                </div>
                                <div className="col-lg-4 mb-lg-0 mb-md-3 mb-3">
                                    <section className='mb-1'>
                                        <span className='fw-medium'>Order on: {formatDate(order.createdAt)}</span>
                                    </section>
                                    <section>
                                        <span className='fw-medium'>Payment: {order.method}</span>
                                    </section>
                                </div>
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-8">
                                            <section className='mb-1'>
                                                <span className='fw-medium'>GST/TAXES: {gst}</span>
                                            </section>
                                            <section className='mb-1'>
                                                <span className='fw-medium'>Shipping charges: {shipping}</span>
                                            </section>
                                            <section className='mb-1'>
                                                <span className='fw-medium'>Ammount: {order.total}</span>
                                            </section>
                                        </div>
                                        <div className="col-4 text-end">
                                            <Icon.PrinterFill className='mt-lg-0 mt-md-5 mt-5' color='green' size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            {
                                order.products.map((product, i) => (
                                    <div className='card mb-3' key={i}>
                                        <div className='row p-3'>
                                            <div className='col-4'>
                                                <img src={product.image} className='img-fluid rounded-start cart-image mx-auto' alt={product.thumbnail} />
                                            </div>
                                            <div className='col-8'>
                                                <div className='card-body'>
                                                    <div className='row'>
                                                        <div className='col-lg-8 mb-lg-0 mb-md-2 mb-2'>
                                                            <Link to={`/product/` + product.id} className='nav-link'>
                                                                <h5 className='card-title order-font'>{product.product}</h5>
                                                            </Link>
                                                            <span className='text-muted'>SKU - {product.sku}</span>
                                                        </div>
                                                        <div className='col-lg-4 cart-line-amount'>
                                                            <h5 className='order-font'><Icon.CurrencyDollar />{product.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
            }
        </Container>
    )
}

export default Order