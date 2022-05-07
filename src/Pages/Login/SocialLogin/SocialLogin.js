import React from 'react';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../../images/social/googleLogo.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (errorGoogle) {
        errorElement = <div>
            <p className='text-danger'>Error: {errorGoogle?.message}</p>
        </div>
    }

    if (userGoogle) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-primary social d-block my-2'>
                <img style={{ width: "30px" }} src={googleLogo} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;