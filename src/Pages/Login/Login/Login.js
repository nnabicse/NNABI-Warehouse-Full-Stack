import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const axios = require('axios').default;

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
        auth
    );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;
    if (error || errorReset) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}{errorReset?.message}</p>
        </div>
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        localStorage.setItem('accessToken', data.accessToken)
        console.log(data)
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(emailRef.current.value);
            toast('Sent Mail');
        }
        else {
            toast("Please Enter Your Email Adress")
        }

    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='login-container'>
            <h1 className='login-header'>PLEASE LOGIN</h1>
            <div className='form-and-text-container'>
                <Form className='form' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    {errorElement}
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </Form>
                <p>New Here? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                <p>Forgot Password? <Link onClick={resetPassword} to='' className='text-danger pe-auto text-decoration-none'>Reset Password</Link></p>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;