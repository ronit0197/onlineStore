import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../../Context/AuthContext';
import { db } from '../../Database/Firebase';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const fetchOrdersByEmail = async (email) => {

    try {
        const ordersRef = collection(db, 'orders');
        const q = query(ordersRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);

        const orders = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log(orders); // Replace with your logic to display orders
        return orders;
    } catch (error) {
        console.error('Error fetching orders:', error);
        return [];
    }
};

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const { currentUser } = useAuth();

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
        });
    };

    useEffect(() => {
        const fetchOrders = async () => {
            if (currentUser && currentUser.email) {
                const fetchedOrders = await fetchOrdersByEmail(currentUser.email);
                setOrders(fetchedOrders);
            }
        };

        fetchOrders();
    }, [currentUser]);


    console.log("Orders:", orders)

    return (
        <Container className='mt-4 p-3 page-section'>
            <h3 className='text-secondary mb-3'>Orders</h3>
            <Table striped="columns" responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Method</th>
                        <th className='text-end'>View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, i) => (
                            <tr>
                                <td>{i+1}</td>
                                <td className='order-font'>{formatDate(order.createdAt)}</td>
                                <td className='order-font'><Icon.CurrencyDollar />{order.total}</td>
                                <td className='order-font'>{order.method}</td>
                                <td className='text-end'><Link to={`/order/${order.id}`} className='nav-link'><Icon.CaretRightFill /></Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default Orders