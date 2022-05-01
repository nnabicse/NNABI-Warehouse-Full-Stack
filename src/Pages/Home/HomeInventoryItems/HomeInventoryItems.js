import React from 'react';
import useItems from '../../../hooks/useItems';
import HomeInventoryItem from '../HomeInventoryItem/HomeInventoryItem';

const HomeInventoryItems = () => {
    const [items] = useItems();
    return (
        <div>
            <h2>Inventory Items</h2>
            {
                items.map(item => <HomeInventoryItem
                    key={item.id}
                    item={item}
                ></HomeInventoryItem>)
            }

        </div>
    );
};

export default HomeInventoryItems;