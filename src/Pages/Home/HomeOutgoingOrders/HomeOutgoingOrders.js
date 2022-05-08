import React from 'react';
import useOrders from '../../../hooks/useOrders';
import './HomeOutgoingOrders.css';
import HomeOutgoingOrder from '../HomeOutgoingOrder/HomeOutgoingOrder';
import { useNavigate } from 'react-router-dom';

const HomeOutgoingOrders = () => {
    const [orders] = useOrders();
    const navigate = useNavigate();
    const handleHomeOutgoingShowAll = () => {
        navigate('/outgoingorders')
    }
    return (
        <div className='home-outgoing-section-container'>
            <div>
                <div className='home-outgoing-section-header-container'>
                    <h1 className='home-outgoing-section-header'>RECENT SALES</h1>
                </div>
                <div className='home-outgoing-items-container'>
                    {
                        orders.slice(0, 6).map(order => <HomeOutgoingOrder
                            key={order._id}
                            order={order}
                        ></HomeOutgoingOrder>)
                    }
                </div>
                <div className='home-outgoing-show-all-button-container bg'>
                    <button className='home-outgoing-show-all-button btn btn-primary fw-bold' onClick={handleHomeOutgoingShowAll}>Show All Sales</button>
                </div>

            </div>
        </div>
    );
};

export default HomeOutgoingOrders;