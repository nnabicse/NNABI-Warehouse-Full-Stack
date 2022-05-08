import React from 'react';
import usePurchases from '../../../hooks/usePurchases';
import IncomingPurchase from '../IncomingPurchase/IncomingPurchase';
import './IncomingPurchases.css'

const IncomingPurchases = () => {

    const [purchases, setPurchases] = usePurchases();
    const handleRecievePurchaseButton = (id) => {
        const selectedPurchase = purchases.filter(purchase => purchase._id === id);
        const newPurchase = { ...selectedPurchase[0] }
        const { img, price, name, quantity, supplier, desc } = newPurchase;
        const purchase = { img, price, name, quantity, supplier, desc };
        const { _id } = purchase;
        console.log(purchase);

        console.log(purchase);
        fetch(`http://localhost:5000/item`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })

    }
    const handleRemoveforRecieve = (id) => {
        fetch(`http://localhost:5000/purchase/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(purchase => {
                const filteredPurchases = purchases.filter(purchase => purchase._id !== id);
                console.log(filteredPurchases);
                setPurchases(filteredPurchases);
            });

    }
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
                        key={purchase._id}
                        purchase={purchase}
                        handleRecievePurchaseButton={handleRecievePurchaseButton}
                        handleRemoveforRecieve={handleRemoveforRecieve}
                    ></IncomingPurchase>)
                }
            </table>
        </div>
    );
};

export default IncomingPurchases;