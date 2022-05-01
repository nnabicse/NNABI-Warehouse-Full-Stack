import React from 'react';
import useOrders from '../../../hooks/useOrders';
import HomeOutgoingOrder from '../HomeOutgoingOrder/HomeOutgoingOrder';

const HomeOutgoingOrders = () => {
    const [orders] = useOrders();
    return (
        <div>
            <h2>Outgoing Orders</h2>
            {
                orders.map(order => <HomeOutgoingOrder
                    key={order.id}
                    order={order}
                ></HomeOutgoingOrder>)
            }

        </div>
    );
};

export default HomeOutgoingOrders;