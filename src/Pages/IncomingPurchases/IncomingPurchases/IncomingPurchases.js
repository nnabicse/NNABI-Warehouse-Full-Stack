import React from 'react';
import usePurchases from '../../../hooks/usePurchases';
import IncomingPurchase from '../IncomingPurchase/IncomingPurchase';
import './IncomingPurchases.css'

const IncomingPurchases = () => {
    const [purchases] = usePurchases();
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
                    purchases.map(purchase => <IncomingPurchase
                        key={purchase.id}
                        order={purchase}
                    ></IncomingPurchase>)
                }
            </table>
        </div>
    );
};

export default IncomingPurchases;