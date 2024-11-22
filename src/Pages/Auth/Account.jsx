import React, { useEffect } from 'react'
import { useAuth } from '../../Context/AuthContext';
import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const Account = () => {

    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {

        if (currentUser === null) {
            navigate('/login')
        }

    }, [currentUser, navigate])


    return (
        <Container className='pt-4 auth-container'>
            <div className='text-center border border-1 rounded p-3'>
                <Icon.PersonCircle color='gray' size={80} />
                <h2 className='text-secondary mt-3'>{currentUser?.email}</h2>
                <button className='mt-4 btn btn-secondary' onClick={handleLogout}>Logout</button>
            </div>
        </Container>
    )
}

export default Account