import React from 'react';
import './HomeInventoryItems.css';
import useItems from '../../../hooks/useItems';
import HomeInventoryItem from '../HomeInventoryItem/HomeInventoryItem';

const HomeInventoryItems = () => {
    const [items] = useItems();
    return (
        <div>
            <h2>Inventory Items</h2>
            <div className='home-items-container'>
                {
                    items.map(item => <HomeInventoryItem
                        key={item.id}
                        item={item}
                    ></HomeInventoryItem>)
                }
            </div>

        </div>
    );
};

export default HomeInventoryItems;