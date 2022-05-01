import React from 'react';
import './OutgoingOrders.css'
import OutgoingOrder from '../OutgoingOrder/OutgoingOrder';
import useOrders from '../../../hooks/useOrders';

const OutgoingOrders = () => {
    const [orders] = useOrders();
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Supplier</th>
                    <th>Action</th>
                </tr>
                {
                    orders.map(order => <OutgoingOrder
                        key={order.id}
                        order={order}
                    ></OutgoingOrder>)
                }
            </table>
        </div>
    );
};

export default OutgoingOrders;