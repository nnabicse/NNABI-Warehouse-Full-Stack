import React from 'react';
import usePurchases from '../../../hooks/usePurchases';
import HomeIncomingPurchase from '../HomeIncomingPurchase/HomeIncomingPurchase';

const HomeIncomingPurchases = () => {
    const [purchses] = usePurchases();
    return (
        <div>
            <h2>Incoming Purchases</h2>
            {
                purchses.map(purchase => <HomeIncomingPurchase
                    key={purchase.id}
                    purchase={purchase}
                ></HomeIncomingPurchase>)
            }

        </div>
    );
};

export default HomeIncomingPurchases;