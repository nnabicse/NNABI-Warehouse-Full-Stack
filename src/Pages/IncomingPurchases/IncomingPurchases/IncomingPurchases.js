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

        fetch(`https://glacial-anchorage-62704.herokuapp.com/item`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })

    }
    const handleRemoveforRecieve = (id) => {
        fetch(`https://glacial-anchorage-62704.herokuapp.com/purchase/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(purchase => {
                const filteredPurchases = purchases.filter(purchase => purchase._id !== id);
                setPurchases(filteredPurchases);
            });

    }
    return (
        <div className='incoming-purchases-section-container'>
            <div>
                <div className='incoming-purchases-section-header-container'>
                    <h1 className='incoming-purchases-section-header'>INCOMINIG PURCHASES</h1>
                </div>
                <div className='incoming-purchases-item-container'>
                    {
                        purchases.map(purchase => <IncomingPurchase
                            key={purchase._id}
                            purchase={purchase}
                            handleRecievePurchaseButton={handleRecievePurchaseButton}
                            handleRemoveforRecieve={handleRemoveforRecieve}
                        ></IncomingPurchase>)
                    }
                </div>
            </div>
        </div>
    );
};

export default IncomingPurchases;