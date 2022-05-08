import React from 'react';
import './OutgoingOrders.css'
import OutgoingOrder from '../OutgoingOrder/OutgoingOrder';
import useOrders from '../../../hooks/useOrders';

const OutgoingOrders = () => {
    const [orders] = useOrders()

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Client</th>
                </tr>
                {
                    orders.map(order => <OutgoingOrder
                        key={order._id}
                        order={order}
                    ></OutgoingOrder>)
                }
            </table>
        </div>
    );
};

export default OutgoingOrders;