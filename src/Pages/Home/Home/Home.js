import React from 'react';
import Banner from '../Banner/Banner';
import HomeIncomingPurchases from '../HomeIncomingPurchases/HomeIncomingPurchases';
import HomeInventoryItems from '../HomeInventoryItems/HomeInventoryItems';
import HomeOutgoingOrders from '../HomeOutgoingOrders/HomeOutgoingOrders';
import './Home.css';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <div>
                <HomeInventoryItems></HomeInventoryItems>
                <HomeIncomingPurchases></HomeIncomingPurchases>
                <HomeOutgoingOrders></HomeOutgoingOrders>
            </div>
        </div>
    );
};

export default Home;