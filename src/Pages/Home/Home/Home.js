import React from 'react';
import HomeIncomingPurchases from '../HomeIncomingPurchases/HomeIncomingPurchases';
import HomeInventoryItems from '../HomeInventoryItems/HomeInventoryItems';
import HomeOutgoingOrders from '../HomeOutgoingOrders/HomeOutgoingOrders';
import './Home.css';

const Home = () => {

    return (
        <div>
            <HomeInventoryItems></HomeInventoryItems>
            <HomeIncomingPurchases></HomeIncomingPurchases>
            <HomeOutgoingOrders></HomeOutgoingOrders>
        </div>
    );
};

export default Home;