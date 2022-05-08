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
        <div>
            <h2>Inventory Items</h2>
            <div className='home-items-container'>
                {
                    items.slice(0, 6).map(item => <HomeInventoryItem
                        key={item._id}
                        item={item}
                    ></HomeInventoryItem>)
                }
            </div>
            <div>
                <button onClick={handleManageInventoriesButton}>Manage Inventories</button>
            </div>

        </div>
    );
};

export default HomeInventoryItems;