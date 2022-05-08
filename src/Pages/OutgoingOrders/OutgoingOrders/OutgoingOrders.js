import React from 'react';
import './OutgoingOrders.css'
import OutgoingOrder from '../OutgoingOrder/OutgoingOrder';
import useOrders from '../../../hooks/useOrders';

const OutgoingOrders = () => {
    const [orders] = useOrders()

    return (
        <div className='outgoing-orders-section-container'>
            <div>
                <div className='outgoing-orders-section-header-container'>
                    <h1 className='outgoing-orders-section-header'>RECENT SALES</h1>
                </div>
                <div className='outgoing-orders-item-container'>
                    {
                        orders.map(order => <OutgoingOrder
                            key={order._id}
                            order={order}
                        ></OutgoingOrder>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OutgoingOrders;