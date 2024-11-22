import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Register = () => {

    const { currentUser, register } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState({ show: false, message: "", variant: "" });
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!email || !password) {
            setAlert({ show: true, message: "Please fill out all fields!", variant: "warning" });
            return;
        }

        try {
            await register(email, password);
            setAlert({ show: true, message: "Login successful!", variant: "success" });
            navigate('/account');
        } catch (error) {
            setAlert({ show: true, message: error.message, variant: "danger" });
        }
    };

    useEffect(() => {

        if (currentUser != null) {
            navigate('/account')
        }

    }, [currentUser, navigate])

    return (
        <Container className='pt-4 auth-container'>
            <div className='w-75'>
                {/* Alert Section */}
                {alert.show && (
                    <div className={`alert alert-${alert.variant}`} role="alert">
                        {alert.message}
                    </div>
                )}
                <div className='auth-form p-4 border border-1 m-auto mt-2 rounded'>
                    <h3 className='text-secondary mb-3'>Create an account</h3>
                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control shadow-none mb-3"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control shadow-none mb-3"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='row mt-4'>
                        <div className="col-6">
                            <button className='btn btn-success' onClick={handleRegister}>Sign Up</button>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <Link to="/Login">Sign In?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Register