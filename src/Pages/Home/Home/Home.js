import React from 'react';
import Loading from '../../Login/Loading/Loading';
import Banner from '../Banner/Banner';
import HomeIncomingPurchases from '../HomeIncomingPurchases/HomeIncomingPurchases';
import HomeInventoryItems from '../HomeInventoryItems/HomeInventoryItems';
import HomeOutgoingOrders from '../HomeOutgoingOrders/HomeOutgoingOrders';
import './Home.css';

const Home = () => {
    if (null) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <div className='home-container'>
                <HomeInventoryItems></HomeInventoryItems>
                <HomeIncomingPurchases></HomeIncomingPurchases>
                <HomeOutgoingOrders></HomeOutgoingOrders>
            </div>
        </div>
    );
};

export default Home;