import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CartPopUp from '../Components/CartPopUp'
import { CartContext } from '../Context/CartContext';

const Checkout = () => {

    const [popupVisible, setPopupVisible] = useState(false); // For showing popup
    const [popupMessage, setPopupMessage] = useState(''); // Popup message

    const showPopup = (message) => {
        setPopupMessage(message);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const { cart, emptyCart } = useContext(CartContext)
    const navigate = useNavigate()

    // Order address extraction
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [houseNo, setHouseNo] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [district, setDistrict] = useState('')
    const [pincode, setPincode] = useState('')
    const [phoneNo, setPhoneNo] = useState('')


    const total = cart.reduce((sum, product) => sum + product.productPrice * product.quantity, 0);
    const grandTotal = cart.reduce((sum, product) => sum + product.productPrice * product.quantity, 0);
    const totalWithShipping = parseFloat((grandTotal + 50 + 0.25).toFixed(2));

    let products = [];

    cart.map((product) => {
        products.push({
            id: product.id,
            product: product.title,
            image: product.images[0],
            sku: product.sku,
            price: product.productPrice,
            quantity: product.quantity
        })

        return 0;
    })

    const createOrder = async () => {

        if (email === "") {
            showPopup("Please enter your email!");
            return;
        }

        if (name === "") {
            showPopup("Please enter your full name!");
            return;
        }

        if (address === "" || houseNo === "" || city === "" || state === "" || district === "" || pincode === "") {
            showPopup("Please complete your address!");
            return;
        }

        if (phoneNo === "") {
            showPopup("Please enter your phone no!");
            return;
        }

        // const order = {
        //     address: {
        //         email: email,
        //         name: name,
        //         address: address,
        //         house_no: houseNo,
        //         city: city,
        //         state: state,
        //         district: district,
        //         pincode: pincode,
        //         phone_no: phoneNo
        //     },
        //     products: products,
        //     method: "COD"
        // }

        localStorage.removeItem('cart');

        setTimeout(() => {
            emptyCart()
            navigate('/'); // Navigate to Order details page after successfull order
        }, 2000);


    }

    console.log("Cart:", cart)

    if (cart.length === 0) {

        return (
            <div className='conatiner-fluid p-5 m-5 text-center'>
                <h1 className='text-dark'>403</h1>
                <h6 className='text-muted mb-3'>Access forbidden</h6>
                <Link to="/">Go to home</Link>
            </div>
        )

    }

    return (
        <>
            <div className='container-fluid p-lg-5 p-md-2 p-2 mt-5'>
                <div className="container mx-auto bg-light p-4 rounded">
                    <h2 className='mb-4'>Checkout</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className='mb-4 text-dark'>Shipping details</h5>
                            <div className='m-2 border-bottom pb-3'>
                                <div className='border-bottom pb-3 mb-4'>
                                    <label htmlFor="" className='form-label'>Email Address</label>
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} className='form-control shadow-none' value={email} />
                                </div>
                                <div className="row p-1">
                                    <div className="col-12">
                                        <label htmlFor="" className='form-label'>Full Name</label>
                                        <input type="text" onChange={(e) => setName(e.target.value)} className='form-control shadow-none' />
                                    </div>
                                </div>
                                <div className='p-1'>
                                    <label htmlFor="" className='form-label'>Address</label>
                                    <textarea className='form-control shadow-none' onChange={(e) => setAddress(e.target.value)} rows={5}></textarea>
                                </div>
                                <div className='p-1'>
                                    <label htmlFor="" className='form-label'>Apartment / House no.</label>
                                    <input type="text" onChange={(e) => setHouseNo(e.target.value)} className='form-control shadow-none' />
                                </div>
                                <div className="row p-1">
                                    <div className="col-6">
                                        <label htmlFor="" className='form-label'>City</label>
                                        <input type="text" onChange={(e) => setCity(e.target.value)} className='form-control shadow-none' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="" className='form-label'>State</label>
                                        <input type="text" onChange={(e) => setState(e.target.value)} className='form-control shadow-none' />
                                    </div>
                                </div>
                                <div className="row p-1">
                                    <div className="col-6">
                                        <label htmlFor="" className='form-label'>Dist.</label>
                                        <input type="text" onChange={(e) => setDistrict(e.target.value)} className='form-control shadow-none' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="" className='form-label'>Pincode</label>
                                        <input type="text" onChange={(e) => setPincode(e.target.value)} className='form-control shadow-none' />
                                    </div>
                                </div>
                                <div className='p-1'>
                                    <label htmlFor="" className='form-label'>Phone no.</label>
                                    <input type="text" onChange={(e) => setPhoneNo(e.target.value)} className='form-control shadow-none' />
                                </div>
                            </div>
                            <div className='p-2 mb-lg-0 mb-md-4 mb-4'>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="playmentMethod" value="COD" id="flexRadioDefault2" checked />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Cash On Delivery (COD)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4 className='mb-3'>Order summary</h4>
                            <div className='bg-white p-3 rounded-2'>
                                <div className='p-3'>
                                    {
                                        cart.map((product) => {
                                            return (

                                                <div className='card mb-2'>
                                                    <div className='row p-3'>
                                                        <div className='col-md-4'>
                                                            <img src={product.thumbnail} className='img-fluid rounded-start' alt={product.image} />
                                                        </div>
                                                        <div className='col-md-8'>
                                                            <div className='card-body'>
                                                                <div className='row'>
                                                                    <div className='col-lg-8 mb-lg-0 mb-md-2 mb-2'>
                                                                        <h5 className='card-title'>{product.title}</h5>
                                                                    </div>
                                                                    <div className='col-lg-4 cart-line-amount'>
                                                                        <h5>₹ {product.productPrice}</h5>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p className='card-text text-muted'>Quantity - {product.quantity}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='border-top p-2'>
                                    <h4 className='text-dark fw-bold mb-3'>Total amount: {total.toFixed(2)}/-</h4>
                                    <h6 className='text-muted'>GST/TAXES: 20/-</h6>
                                    <h6 className='text-muted'>Shipping charges: 50/-</h6>
                                    <h3 className='mt-5 mb-4 text-dark fw-bold'>Grand total: {parseFloat(total.toFixed(2)) > 0 ? totalWithShipping : '0.00'}/-</h3>
                                </div>
                                <button onClick={createOrder} className='btn btn-success w-100'>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CartPopUp message={popupMessage} visible={popupVisible} closePopup={closePopup} />
        </>
    )
}

export default Checkout