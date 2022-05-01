import React from 'react';
import HomeIncomingPurchases from '../HomeIncomingPurchases/HomeIncomingPurchases';
import HomeInventoryItems from '../HomeInventoryItems/HomeInventoryItems';
import './Home.css';

const Home = () => {

    return (
        <div>
            <HomeInventoryItems></HomeInventoryItems>
            <HomeIncomingPurchases></HomeIncomingPurchases>
        </div>
    );
};

export default Home;