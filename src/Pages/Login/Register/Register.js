import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    const emailRef = useRef("");
    const nameRef = useRef("");
    const passwordRef = useRef("");
    const checkRef = useRef("");
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loadingCreate,
        errorCreate,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    let errorElement;
    if (errorCreate) {
        errorElement = <div>
            <p className='text-danger'>Error: {errorCreate?.message}</p>
        </div>
    }

    if (user) {
        navigate('/home');
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
    }

    const navigateLogin = event => {
        navigate('/login')
    }
    return (
        <div className='register-container'>
            <h2 className='register-header'>Please Register</h2>
            <div className='register-form-and-text-container'>
                <Form className='register-form' onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={nameRef} required type="name" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)} ref={checkRef} type="checkbox" label="Accept Terms and Conditions" />
                    </Form.Group>
                    {errorElement}
                    <button disabled={!agree} className='btn btn-primary' type='submit'>Submit</button>
                </Form>
                <p>Already Have a Account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;