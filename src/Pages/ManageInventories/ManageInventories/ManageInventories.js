import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import ManageInventory from '../ManageInventory/ManageInventory';
import './ManageInventories.css';

const ManageInventories = () => {
    const navigate = useNavigate();
    const [items, setItems] = useItems();
    const handleDeleteButton = (id) => {
        fetch(`http://localhost:5000/item/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(item => {
                const filteredItems = items.filter(item => item._id !== id);
                console.log(filteredItems);
                setItems(filteredItems);
            });
    }
    const handleAddNewItemButton = () => {
        navigate('/addinventoryitem')

    }
    return (
        <div className='manage-inventory-section-container'>
            <div>
                <div className='manage-inventory-section-header-container'>
                    <h1 className='manage-inventory-section-header'>MANAGE INVENTORIES</h1>
                </div>
                <div className='add-new-item-button-container'>
                    <button className='add-new-item-button btn btn-primary fw-bold' onClick={handleAddNewItemButton}>Add New Item</button>
                </div>
                <div className='manage-inventory-item-container'>
                    {
                        items.map(item => <ManageInventory
                            key={item._id}
                            item={item}
                            handleDeleteButton={handleDeleteButton}
                        ></ManageInventory>)
                    }
                </div>
            </div>
        </div>

    );
};

export default ManageInventories;