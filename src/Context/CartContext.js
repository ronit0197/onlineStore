import React, { createContext, useEffect, useState } from 'react';
import CartPopUp from '../Components/CartPopUp'

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [popupVisible, setPopupVisible] = useState(false); // For showing popup
    const [popupMessage, setPopupMessage] = useState(''); // Popup message

    useEffect(() => {
        // Save cart to local storage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const showPopup = (message) => {
        setPopupMessage(message);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const addToCart = (product, productPrice) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                showPopup(`${product.title} added to the cart`);
                return [...prevCart, { ...product, productPrice, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    };

    const emptyCart = () => {
        setCart([])
    }

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, emptyCart }}>
            {children}
            <CartPopUp message={popupMessage} visible={popupVisible} closePopup={closePopup} />
        </CartContext.Provider>
    );
};

export default CartProvider;
