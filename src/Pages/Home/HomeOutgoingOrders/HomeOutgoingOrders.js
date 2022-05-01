import React from 'react';
import useOrders from '../../../hooks/useOrders';
import './HomeOutgoingOrders.css';
import HomeOutgoingOrder from '../HomeOutgoingOrder/HomeOutgoingOrder';

const HomeOutgoingOrders = () => {
    const [orders] = useOrders();
    return (
        <div>
            <h2>Outgoing Orders</h2>
            <div className='home-orders-container'>
                {
                    orders.map(order => <HomeOutgoingOrder
                        key={order.id}
                        order={order}
                    ></HomeOutgoingOrder>)
                }
            </div>

        </div>
    );
};

export default HomeOutgoingOrders;