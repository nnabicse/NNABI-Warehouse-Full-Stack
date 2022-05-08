import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [items, setItems] = useItems()

    const handleItemDeleteButton = (id) => {
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

    return (
        <div>
            {
                items.map(item => <ManageItem
                    key={item._id}
                    item={item}
                    handleItemDeleteButton={handleItemDeleteButton}
                ></ManageItem>)
            }
        </div>

    );
};

export default ManageItems;