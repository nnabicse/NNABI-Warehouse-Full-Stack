import React from 'react';
import './HomeIncomingPurchases.css';
import usePurchases from '../../../hooks/usePurchases';
import HomeIncomingPurchase from '../HomeIncomingPurchase/HomeIncomingPurchase';

const HomeIncomingPurchases = () => {
    const [purchses] = usePurchases();
    return (
        <div>
            <h2>Incoming Purchases</h2>
            <div className='home-puchases-container'>
                {
                    purchses.map(purchase => <HomeIncomingPurchase
                        key={purchase.id}
                        purchase={purchase}
                    ></HomeIncomingPurchase>)
                }
            </div>

        </div>
    );
};

export default HomeIncomingPurchases;