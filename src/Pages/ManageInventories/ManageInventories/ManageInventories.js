import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import ManageInventory from '../ManageInventory/ManageInventory';
import './ManageInventories.css';

const ManageInventories = () => {
    const navigate = useNavigate();
    const [items, setItems] = useItems();
    const handleDeleteButton = (id) => {
        const filtered = items.filter(item => item.id !== id);
        const newItems = [...filtered];
        setItems(newItems);
        console.log(items);
    }
    const handleAddNewItemButton = () => {
        navigate('/addinventoryitem')

    }
    return (
        <div>
            <div>
                <button onClick={handleAddNewItemButton}>Add New Item</button>
            </div>
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