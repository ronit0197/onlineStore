import React, { useContext } from 'react'
import CartLine from '../Components/CartLine'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
import { CartContext } from '../Context/CartContext'

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    const handleQuantityChange = (productId, quantity) => {
        if (quantity > 0) {
            updateQuantity(productId, quantity);
        }
    };

    const gst = 0.25;
    const shipping = 50;

    const total = cart.reduce((sum, product) => sum + product.productPrice * product.quantity, 0);
    const grandTotal = cart.reduce((sum, product) => sum + product.productPrice * product.quantity, 0);
    const totalWithShipping = parseFloat((grandTotal + shipping + gst).toFixed(2));

    return (
        <div className='container mt-2 p-3 page-section'>
            <div className='row p-4 mt-5 '>
                <div className="col-lg-8 minHight">
                    <div className="row">
                        {
                            cart.length > 0 ?
                                cart.map((item, i) => {
                                    return (

                                        <div key={i} className="col-12 mb-3">
                                            <CartLine product={item} handleQuantityChange={handleQuantityChange} removeFromCart={removeFromCart} />
                                        </div>
                                    )
                                })
                                :
                                <div className='text-center pt-3 mb-lg-0 mb-md-3 mb-4'>
                                    <h1 className='text-muted fw-bold mt-5'>Cart is empty</h1>
                                    <Link to="/" className='mt-3 btn btn-success'><Icon.ArrowLeft className='me-2' />Continue Shopping</Link>
                                </div>
                        }
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card p-3 rounded">
                        <h4 className='text-dark fw-bold mb-3'>Total amount: {total.toFixed(2)}/-</h4>
                        <h6 className='text-muted'>GST/TAXES: {gst}/-</h6>
                        <h6 className='text-muted'>Shipping charges: {shipping}/-</h6>
                        <h3 className='mt-5 mb-4 fw-bold'>Grand total: {parseFloat(total.toFixed(2)) > 0 ? totalWithShipping : '0.00'}/-</h3>
                        {
                            cart.length > 0 &&
                            <Link to="/checkout" className='btn btn-success w-100 shadow-none'>Check out</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart