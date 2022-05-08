import React from 'react';
import './HomeIncomingPurchases.css';
import usePurchases from '../../../hooks/usePurchases';
import HomeIncomingPurchase from '../HomeIncomingPurchase/HomeIncomingPurchase';
import { useNavigate } from 'react-router-dom';

const HomeIncomingPurchases = () => {
    const [purchses] = usePurchases();
    const navigate = useNavigate();
    const handleManagePurchaseButton = () => {
        navigate('/incomingpurchases')
    }
    return (
        <div className='home-incoming-section-container'>
            <div>
                <div className='home-incoming-header-container'>
                    <h1 className='home-incoming-header'>INCOMING PURCHASES</h1>
                </div>
                <div className='home-incoming-items-container'>
                    {

                        purchses.slice(0, 6).map(purchase => <HomeIncomingPurchase
                            key={purchase.id}
                            purchase={purchase}
                        ></HomeIncomingPurchase>)

                    }
                </div>
                <div className='home-incoming-manage-button-container'>
                    <button className='home-incoming-manage-button' onClick={handleManagePurchaseButton}>Manage Purchases</button>
                </div>
            </div>
        </div>
        // <div className='home-incoming-section-container'>
        //     <div>
        //         <div className='home-incoming-items-header-container'>
        //             <h2 className='home-incoming-items-header'>Incoming Purchases</h2>
        //         </div>
        //         <div className='home-incoming-items-container'>
        //             {
        //                 purchses.slice(0, 6).map(purchase => <HomeIncomingPurchase
        //                     key={purchase.id}
        //                     purchase={purchase}
        //                 ></HomeIncomingPurchase>)
        //             }
        //         </div>
        //         <div className='home-incoming-manage-button-container'>
        //             <button className='home-incoming-manage-button' onClick={handleManagePurchaseButton}>Manage Purchases</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default HomeIncomingPurchases;