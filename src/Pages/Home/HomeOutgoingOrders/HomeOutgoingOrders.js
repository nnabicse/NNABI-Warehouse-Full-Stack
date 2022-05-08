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
                    <h2 className='home-outgoing-section-header'>OUTGOING ORDERS</h2>
                </div>
                <div className='home-outgoing-items-container'>
                    {
                        orders.slice(0, 6).map(order => <HomeOutgoingOrder
                            key={order.id}
                            order={order}
                        ></HomeOutgoingOrder>)
                    }
                </div>
                <div className='home-outgoing-show-all-button-container'>
                    <button className='home-outgoing-show-all-button' onClick={handleHomeOutgoingShowAll}>SHOW ALL</button>
                </div>

            </div>
        </div>
    );
};

export default HomeOutgoingOrders;