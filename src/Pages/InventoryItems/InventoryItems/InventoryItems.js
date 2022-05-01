import React from 'react';
import useItems from '../../../hooks/useItems';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items] = useItems();
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Supplier</th>
                    <th>Action</th>
                </tr>
                {
                    items.map(item => <InventoryItem
                        key={item.id}
                        item={item}
                    ></InventoryItem>)
                }
            </table>
        </div>
    );
};

export default InventoryItems;