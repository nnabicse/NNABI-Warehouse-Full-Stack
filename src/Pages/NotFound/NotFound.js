import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <div className='error-container'>
                <h1 className='error'>404</h1>
                <h1 className='not-found'>Page Not Found</h1>
            </div>
        </div>
    );
};

export default NotFound;