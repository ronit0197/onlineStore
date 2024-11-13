import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'

const CartLine = ({ product, handleQuantityChange, removeFromCart }) => {
    return (
        <div className='card'>
            <div className='row p-3'>
                <div className='col-md-4'>
                    <img src={product.thumbnail} className='img-fluid rounded-start cart-image mx-auto' alt={product.thumbnail} />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-8 mb-lg-0 mb-md-2 mb-2'>
                                <Link to={`/product/` + product.id} className='nav-link'>
                                    <h5 className='card-title'>{product.title}</h5>
                                </Link>
                                <span className='text-muted'>SKU - {product.sku}</span>
                            </div>
                            <div className='col-lg-4 cart-line-amount'>
                                <h5>₹ {product.price}</h5>
                            </div>
                        </div>
                        <div className='mt-5 d-flex justify-content-between align-items-center'>
                            <div className='d-flex'>
                                <button className='btn btn-outline-secondary' onClick={() => handleQuantityChange(product.id, product.quantity - 1)} disabled={product.quantity <= 1}><Icon.Dash size={20}></Icon.Dash></button>
                                <input type="number" min={1} max={25} value={product.quantity} className='form-control shadow-none mx-2 cart-quantity no-spinner' />
                                <button className='btn btn-outline-secondary' onClick={() => handleQuantityChange(product.id, product.quantity + 1)} disabled={product.quantity >= product.stock}><Icon.Plus size={20}></Icon.Plus></button>
                            </div>
                            <button onClick={() => removeFromCart(product.id)} className='btn border-0'><Icon.Trash3 color='#ff0000'></Icon.Trash3></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartLine