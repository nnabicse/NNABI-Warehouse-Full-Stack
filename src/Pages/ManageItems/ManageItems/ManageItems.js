import React from 'react';
import useItems from '../../../hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';
import './ManageItems.css'

const ManageItems = () => {
    const [items, setItems] = useItems()

    const handleItemDeleteButton = (id) => {
        const proceed = window.confirm("Are You Sure?");
        if (!proceed) {
            return
        }
        fetch(`https://glacial-anchorage-62704.herokuapp.com/item/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(item => {
                const filteredItems = items.filter(item => item._id !== id);
                console.log(filteredItems);
                setItems(filteredItems);
            });
    }

    return (
        <div className='manage-items-section-container'>
            <div className='manage-items-section-header-container'>
                <h1 className='manage-items-section-header'>MANAGE ITEMS</h1>
            </div>
            <div className='manage-items-container'>
                {
                    items.map(item => <ManageItem
                        key={item._id}
                        item={item}
                        handleItemDeleteButton={handleItemDeleteButton}
                    ></ManageItem>)
                }
            </div>
        </div>

    );
};

export default ManageItems;