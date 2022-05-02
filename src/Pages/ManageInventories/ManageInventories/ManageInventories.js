import React from 'react';
import useItems from '../../../hooks/useItems';
import ManageInventory from '../ManageInventory/ManageInventory';
import './ManageInventories.css';

const ManageInventories = () => {
    const [items, setItems] = useItems();
    const handleDeleteButton = (id) => {
        const filtered = items.filter(item => item.id !== id);
        const newItems = [...filtered];
        setItems(newItems);
        console.log(items);
    }
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
                    items.map(item => <ManageInventory
                        key={item.id}
                        item={item}
                        handleDeleteButton={handleDeleteButton}
                    ></ManageInventory>)
                }
            </table>
        </div>
    );
};

export default ManageInventories;