import React from 'react';
import './HomeInventoryItems.css';
import useItems from '../../../hooks/useItems';
import HomeInventoryItem from '../HomeInventoryItem/HomeInventoryItem';
import { useNavigate } from 'react-router-dom';

const HomeInventoryItems = () => {
    const navigate = useNavigate();
    const handleManageInventoriesButton = () => {
        navigate('/manageinventory')
    }
    const [items] = useItems();
    return (
        <div className='home-inventory-section-container'>
            <div>
                <div className='home-inventory-header-container'>
                    <h1 className='home-inventory-header'>INVENTORY ITEMS</h1>
                </div>
                <div className='home-inventory-items-container'>
                    {
                        items.slice(0, 6).map(item => <HomeInventoryItem
                            key={item._id}
                            item={item}
                        ></HomeInventoryItem>)
                    }
                </div>
                <div className='home-inventory-manage-button-container'>
                    <button className='home-inventory-manage-button btn btn-primary fw-bold' onClick={handleManageInventoriesButton}>Manage Inventories</button>
                </div>
            </div>
        </div>
    );
};

export default HomeInventoryItems;